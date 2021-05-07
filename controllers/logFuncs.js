const winston = require("winston");

// const sew = {
//   level: "info",
//   format: winston.format.json(),
//   defaultMeta: { service: "user-service" },
//   transports: [
//     //
//     // - Write all logs with level `error` and below to `error.log`
//     // - Write all logs with level `info` and below to `combined.log`
//     //
//     new winston.transports.File({ filename: "error.log", level: "error" }),
//     new winston.transports.File({ filename: "combined.log" }),
//   ],
// };

// const logger = winston.createLogger(sew);

const options = {
  language: "en", // set language of log type, NOTE: please help with translations! (optional, default en - values: en|it|pl|es|pt|de|ru)
  colors: true, // enable/disable colors in terminal (optional, default enabled - values: true|enabled or false|disabled)
  debug: true, // enable/disable all logs with method debug (optional, default enabled - values: true|enabled or false|disabled)
  info: true, // enable/disable all logs with method info (optional, default enabled - values: true|enabled or false|disabled)
  warning: true, // enable/disable all logs with method warning (optional, default enabled -  values: true|enabled or false|disabled)
  error: true, // enable/disable all logs with method errors (optional, default enabled - values: true|enabled or false|disabled)
  sponsor: true, // enable/disable all logs with method sponsor (optional, default enabled - values: true|enabled or false|disabled)
  write: true, // write the logs into a file, you need set path values (optional, default disabled - values: true|enabled or false|disabled)
  type: "json", // format of logs in files (optional, default log - values: log|json)
  path: {
    // if write is true, the library writes the logs to a path
    debug_log: "./debug.json", // all logs
    error_log: "./errors.json", // only errors logs
  },
};

// import { Logger } from "@ptkdev/logger";
// const Logger = require("@ptkdev/logger");
// const logger = new Logger(options);

module.exports.logga = (...wer) => {
  // console.log(...wer);
};

module.exports.loggo = (...wer) => {
  console.log(...wer);
};
