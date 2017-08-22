import { LogAppender } from "./LogAppender";
import { LogLevel } from "./LogLevel";

export class ChromeLogAppender implements LogAppender {

    FgRed: string = "color: red";
    FgYellow: string = "color: #cccc00";
    Black: string = "color: black";

    append(logLevel: LogLevel, name: string, msg: string): void {
        // TODO: make it configurable
        var now = new Date();
        console.log(
            + "%c"
            + ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": "
            + "%c"
            + msg
            // Colors:
            , (logLevel >= LogLevel.Error ? this.FgRed : this.FgYellow)
            , (logLevel >= LogLevel.Error ? this.FgRed : this.Black)
        );
    }

}