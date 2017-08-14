"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LogLevel_1 = require("./LogLevel");
class ConsoleAppender {
    append(logLevel, name, msg) {
        // TODO: make it configurable
        var now = new Date();
        console.log(("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel_1.LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": " + msg);
    }
}
exports.ConsoleAppender = ConsoleAppender;
//# sourceMappingURL=ConsoleLogAppender.js.map