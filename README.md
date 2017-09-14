# AkiBot Logger
Sub-project of https://github.com/makimenko/akibot.git<br>
Very simple and limited sync logger for typescript.

## Installation
1. Add dependency
```
npm install makimenko/akibot-log -save
```

2. Create log-config.ts
```
import {Logger, LogRule, LogLevel, LogFactory, ConsoleLogAppender} from "akibot-log/dist";

export {Logger};

var rules: LogRule[] = [
    {
        pattern: new RegExp(".*"),
        logLevel: LogLevel.Info
    }, {
        pattern: new RegExp("Gyroscope"),
        logLevel: LogLevel.Trace
    }

]
export const logFactory = new LogFactory(new ConsoleLogAppender(), rules);
```

3. Use it in the code
```
import {logFactory} from "../log-config";

export class Sample {

    private logger = logFactory.getLogger(this.constructor.name);

    paramPamPam() {
        this.logger.info("Hello");
    }
}
```

## Sample output
```
 2017-8-14 21:34:39:  Info: sandbox                  : Initializing starting...
 2017-8-14 21:34:39:  Info: CommandComponent         : constructor
 2017-8-14 21:34:39:  Info: OrientationComponent     : constructor
 2017-8-14 21:34:39:  Info: sandbox                  : Sandbox starting...
 2017-8-14 21:34:39: Debug: GyroscopeComponent       : onGyroscopeMode: 1000
 2017-8-14 21:34:39: Trace: GyroscopeComponent       : getGyroscopeValue
 2017-8-14 21:34:40: Trace: GyroscopeComponent       : getGyroscopeValue
 2017-8-14 21:34:44: Debug: GyroscopeComponent       : onGyroscopeMode: 0
 2017-8-14 21:34:44:  Info: sandbox                  : Orientation SUCEEDED! Final angle is: 111.53946624189192
 ```

## Use Color logs in Chrome and Firefox
If you want to spool the color logs in Chrome or Firefox, please use ConsoleLogAppender (instead of LogAppender).
