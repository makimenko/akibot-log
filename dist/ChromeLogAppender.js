"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class ChromeLogAppender {
    constructor() {
        this.FgRed = "color: red";
        this.FgYellow = "color: #cccc00";
        this.Black = "color: black";
    }
    append(logLevel, name, msg) {
        // TODO: make it configurable
        var now = new Date();
        console.log(+"%c"
            + ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel_1.LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": "
            + "%c"
            + msg
        // Colors:
        , (logLevel >= LogLevel_1.LogLevel.Error ? this.FgRed : this.FgYellow), (logLevel >= LogLevel_1.LogLevel.Error ? this.FgRed : this.Black));
    }
}
exports.ChromeLogAppender = ChromeLogAppender;
//# sourceMappingURL=ChromeLogAppender.js.map