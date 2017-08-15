import { LogRule, LogLevel, LogFactory, ConsoleLogAppender } from "./index";

var rules: LogRule[] = [
    {
        pattern: new RegExp(".*"),
        logLevel: LogLevel.Info
    }, {
        pattern: new RegExp("MyComponent2"),
        logLevel: LogLevel.Trace
    }

]
const logFactory = new LogFactory(new ConsoleLogAppender(), rules);

// ------------------------------------------------------------------------------------

var logger1 = logFactory.getLogger("MyComponent1");
var logger2 = logFactory.getLogger("MyComponent2");

logger1.info("this is info message");
logger1.debug("this message should be invisible");
logger2.debug("this is debug message");
logger2.error("this is error message");
logger2.info("this is info message");
logger1.info("this is info message");