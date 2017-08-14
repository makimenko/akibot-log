import { LogAppender } from "./LogAppender";
import { LogLevel } from "./LogLevel";

export class ConsoleLogAppender implements LogAppender {

    append(logLevel: LogLevel, name: string, msg: string): void {
        // TODO: make it configurable
        var now = new Date();
        console.log(
            ("  " + now.toLocaleString()).slice(-19)
            + ": "
            + ("     " + LogLevel[logLevel]).slice(-5)
            + ": "
            + (name + "                                  ").substring(0, 25)
            + ": " + msg
        );
    }

}