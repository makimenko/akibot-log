"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class ConsoleLogAppender {
    constructor() {
        this.Reset = "\x1b[0m";
        this.Bright = "\x1b[1m";
        this.Dim = "\x1b[2m";
        this.Underscore = "\x1b[4m";
        this.Blink = "\x1b[5m";
        this.Reverse = "\x1b[7m";
        this.Hidden = "\x1b[8m";
        this.FgBlack = "\x1b[30m";
        this.FgRed = "\x1b[31m";
        this.FgGreen = "\x1b[32m";
        this.FgYellow = "\x1b[33m";
        this.FgBlue = "\x1b[34m";
        this.FgMagenta = "\x1b[35m";
        this.FgCyan = "\x1b[36m";
        this.FgWhite = "\x1b[37m";
        this.BgBlack = "\x1b[40m";
        this.BgRed = "\x1b[41m";
        this.BgGreen = "\x1b[42m";
        this.BgYellow = "\x1b[43m";
        this.BgBlue = "\x1b[44m";
        this.BgMagenta = "\x1b[45m";
        this.BgCyan = "\x1b[46m";
        this.BgWhite = "\x1b[47m";
    }
    append(logLevel, name, msg) {
        // TODO: make it configurable
        var now = new Date();
        console.log((logLevel >= LogLevel_1.LogLevel.Error ? this.FgRed : this.FgYellow)
            + ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel_1.LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": "
            + this.Reset
            + (logLevel >= LogLevel_1.LogLevel.Error ? this.FgRed : "")
            + msg
            + (logLevel >= LogLevel_1.LogLevel.Error ? this.Reset : ""));
    }
}
exports.ConsoleLogAppender = ConsoleLogAppender;
//# sourceMappingURL=ConsoleLogAppender.js.map