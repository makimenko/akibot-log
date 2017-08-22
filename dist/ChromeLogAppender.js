"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class ChromeLogAppender {
    constructor() {
        this.FgRed = 'color: red;';
        this.FgYellow = 'color: #cccc00;';
        this.Default = 'color: #663300;';
    }
    append(logLevel, name, msg) {
        // TODO: make it configurable
        var now = new Date();
        var consoleMessage = +'%c'
            + ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel_1.LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": "
            + "%c"
            + msg;
        console.log(consoleMessage, 'color:red', 'color:green');
        //                    , (logLevel >= LogLevel.Error ? this.FgRed : this.FgYellow)
        //, (logLevel >= LogLevel.Error ? this.FgRed : this.Default)
    }
}
exports.ChromeLogAppender = ChromeLogAppender;
//# sourceMappingURL=ChromeLogAppender.js.map