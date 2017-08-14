"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class Logger {
    constructor(name, logLevel) {
        this.name = name;
        this.logLevel = logLevel;
    }
    print(logLevel, msg) {
        if (logLevel >= this.logLevel) {
            var now = new Date();
            // TODO: Make it configurable
            console.log(("  " + now.toLocaleString()).slice(-19)
                + ": "
                + ("     " + LogLevel_1.LogLevel[logLevel]).slice(-5)
                + ": "
                + (this.name + "                                  ").substring(0, 25)
                + ": " + msg);
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