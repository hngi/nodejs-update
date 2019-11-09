const { getData } = require("../config/ga");

const gaManual = (req, res) => {
  const { metrics, startDate, endDate } = req.query;
  
  Promise.all(
    getData(metrics ? metrics.split(",") : metrics, startDate, endDate)
  )
    .then(data => {
      // Fix list of objects into one object
      const body = {};
      Object.values(data).forEach(value => {
        Object.keys(value).forEach(key => {
          body[key] = value[key];
        });
      });
      res.status(200).json({ data: body })
    })
    .catch(error => {
      console.error(`Error ${error}`);
      res
        .status(500)
        .json({ status: `Error getting a metric`, message: error });
    });
};

const gaGraph = (req, res) => {
  const { metric } = req.query;
  // 1 week time frame
  let promises = [];
  for (let i = 7; i >= 0; i -= 1) {
    promises.push(getData([metric], `${i}daysAgo`, `${i}daysAgo`));
  }
  promises = [].concat(...promises);
  Promise.all(promises)
    .then(data => {
      // flatten list of objects into one object
      const body = {};
      body[metric] = [];
      Object.values(data).forEach(value => {
        body[metric].push(
          value[metric.startsWith("ga:") ? metric : `ga:${metric}`]
        );
      });
      res.send({ data: body });
    })
    .catch(err => {
      res.send({ status: "Error", message: `${err}` });
    });
};

module.exports = { gaManual, gaGraph };
