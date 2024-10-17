const winston = require("winston");
require("winston-mongodb");
const { LOG_DB_URL } = require("./server.config");

const allowedTransports = [];

allowedTransports.push(
  new winston.transports.Console({
    // formatting for console transport - overrides default formatting
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (log) => `${log.timestamp} [${log.level}]: ${log.message}`
      )
    ),
  })
);

allowedTransports.push(
  new winston.transports.MongoDB({
    level: "error",
    db: LOG_DB_URL,
    collection: "logs",
  })
);

allowedTransports.push(
  new winston.transports.File({
    filename: "app.log",
  })
);

const logger = winston.createLogger({
  // default formatting for all transports - if a transport doesn't have it's own formatting, this will be used
  format: winston.format.combine(
    winston.format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    winston.format.printf(
      (log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}`
    )
  ),
  transports: allowedTransports,
});

module.exports = logger;
