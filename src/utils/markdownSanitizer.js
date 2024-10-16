const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = TurndownService();

  // 1. Convert markdown to HTML
  const convertedHtml = marked.parse(markdownContent);

  // 2. Sanitize HTML
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags.concat(["img"]),
  });

  // 3. Convert the sanitized HTML back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
