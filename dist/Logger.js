"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class Logger {
    constructor(name, logLevel, logAppender) {
        this.name = name;
        this.logLevel = logLevel;
        this.logAppender = logAppender;
    }
    print(logLevel, msg) {
        if (logLevel >= this.logLevel) {
            this.logAppender.append(logLevel, this.name, msg);
        }
    }
    trace(msg) {
        this.print(LogLevel_1.LogLevel.Trace, msg);
    }
    debug(msg) {
        this.print(LogLevel_1.LogLevel.Debug, msg);
    }
    info(msg) {
        this.print(LogLevel_1.LogLevel.Info, msg);
    }
    warn(msg) {
        this.print(LogLevel_1.LogLevel.Warn, msg);
    }
    error(msg) {
        this.print(LogLevel_1.LogLevel.Error, msg);
    }
    fatal(msg) {
        this.print(LogLevel_1.LogLevel.Fatal, msg);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map