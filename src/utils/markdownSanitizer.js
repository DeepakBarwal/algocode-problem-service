const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turndownService = TurndownService();

  // 1. Convert markdown to HTML
  const convertedHtml = marked.parse(markdownContent);
  console.log("convertedHtml", convertedHtml);

  // 2. Sanitize HTML
  const sanitizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });
  console.log("sanitizedHtml", sanitizedHtml);

  // 3. Convert the sanitized HTML back to markdown
  const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
  console.log("sanitizedMarkdown", sanitizedMarkdown);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
