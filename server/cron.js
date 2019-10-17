const CronJob = require("cron").CronJob;
let U = require("./models/ShortenLink");

//starts cronJob
const someCronJob = new CronJob(
    "00 00 08   *",
    ( ) => { U.removefile(); }
  );
  export {someCronJob};