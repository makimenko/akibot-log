import { LogAppender } from "./LogAppender";
import { LogLevel } from "./LogLevel";

export class ConsoleLogAppender implements LogAppender {

    Reset = "\x1b[0m";
    Bright = "\x1b[1m";
    Dim = "\x1b[2m";
    Underscore = "\x1b[4m";
    Blink = "\x1b[5m";
    Reverse = "\x1b[7m";
    Hidden = "\x1b[8m";

    FgBlack = "\x1b[30m";
    FgRed = "\x1b[31m";
    FgGreen = "\x1b[32m";
    FgYellow = "\x1b[33m";
    FgBlue = "\x1b[34m";
    FgMagenta = "\x1b[35m";
    FgCyan = "\x1b[36m";
    FgWhite = "\x1b[37m";

    BgBlack = "\x1b[40m";
    BgRed = "\x1b[41m";
    BgGreen = "\x1b[42m";
    BgYellow = "\x1b[43m";
    BgBlue = "\x1b[44m";
    BgMagenta = "\x1b[45m";
    BgCyan = "\x1b[46m";
    BgWhite = "\x1b[47m";

    append(logLevel: LogLevel, name: string, msg: string): void {
        // TODO: make it configurable
        var now = new Date();
        console.log(
            (logLevel >= LogLevel.Error ? this.FgRed : this.FgYellow)
            + ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": "
            + this.Reset
            + (logLevel >= LogLevel.Error ? this.FgRed : "")
            + msg
            + (logLevel >= LogLevel.Error ? this.Reset : "")
        );
    }

}