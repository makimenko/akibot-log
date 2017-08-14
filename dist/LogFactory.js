"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
const Logger_1 = require("./Logger");
class LogFactory {
    constructor(logRules) {
        this.logRules = logRules;
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
        return new Logger_1.Logger(name, level);
    }
}
exports.LogFactory = LogFactory;
//# sourceMappingURL=LogFactory.js.map