"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
const Logger_1 = require("./Logger");
class LogFactory {
    constructor(logAppender, logRules) {
        this.logAppender = logAppender;
        this.logRules = logRules;
        this.loggers = [];
    }
    getLoglevel(name) {
        var result = LogLevel_1.LogLevel.Error;
        this.logRules.forEach(i => {
            if (i.pattern.test(name)) {
                result = i.logLevel;
            }
        });
        return result;
    }
    getLogger(name) {
        var level = this.getLoglevel(name);
        var logger = new Logger_1.Logger(name, level, this.logAppender);
        this.loggers.push(logger);
        return logger;
    }
    updateLogRules(newLogRules) {
        this.logRules = newLogRules;
        this.loggers.forEach((l) => l.logLevel = this.getLoglevel(l.name));
    }
}
exports.LogFactory = LogFactory;
//# sourceMappingURL=LogFactory.js.map