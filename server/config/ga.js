const { google } = require("googleapis");
const analytics = google.analytics("v3");

require("dotenv").config();

// Config
const clientEmail = process.env.CLIENT_EMAIL;
const privateKey = process.env.PRIVATE_KEY.replace(new RegExp("\\\\n"), "\n");
const viewId = process.env.VIEW_ID; // Contains ID of the view
const scopes = ["https://www.googleapis.com/auth/analytics.readonly"];

//API
const jwt = new google.auth.JWT({
  email: clientEmail,
  key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1WtN1rmGieyb/\n9ugfyDIfndJ7Xgcuc20vvq/RkM2PTJjIlHJuo1Pd5KifYbPISOylw8tblXpbKLyj\n+hUtpZPLPiD4IXUngVjnXz4TCpop0vpA95f5W/vQ4Vg6hYqvFsY1FTgZehYNp6Vc\n/GNvvHLdvg1al7auYV7G631xvt3q7FKp8FID4yb1c7EhLfriduTq+L6bbf42FpOI\n6FNXWjcOW15YQCh8ghl6bhUvVqRt7CxqLUSeKdCN0ZSdW1UmbZWjtQzx+mHhN3fZ\nT8qB4YDnXFzd3A6S8Co92j9e6uMK7yesijJR587a1g3UF1vjjov1jSBI0qAYPoUo\ndCosYt0FAgMBAAECggEAIjjcdHWOqQmSR3UBQpYVl0/B21PYCRTxArR6GxK3J5Zt\nslQI8AXUGqg+haz7Lw1L0tAKvOKNL0yVpF/ZxT5ckFrN/+TYZbcL3sVjQlaa1s+g\nN8hBHmYUM8uCSbDPhdDHYFb7uhsGtFbxZoWeAgTOrDdj77d3Wpq3NtRTXLaGzACx\nGoramDSNYu332sqkvKU1rONsxDB8c2shsiMzX+ojUCZCQQM8L7PBueTUH03KGzuS\n0lhYC+JfyIwtXvgfMxnYJK+Iwv4PK9m/xF1HGy9QXBiW6li47wDWzVPMQcu+ZN4J\noA7Y4R9DGTcTlmWPtOSDdMjpwtTLibChpTouFiRmFQKBgQDYRd1OTJvxZsvsA6RT\ns1pP6SBYZ3qSuDDgdgFr5rzcPyNNtuN6DBoJGHhnOfEE19CrTVwMNp3uJqCzcmF/\niPp4tqWaEfrdY6mtCDtcFYck4mDvz/eVPJARvAKbR98Oe7huxE5+EOivCSKSvXHd\nSyu+lThxsLKG5doWT/XqpbaNFwKBgQDWqvPrftNWcKH1KmcnzzVf04Qdbcg51XfM\nrKpi+gMnYlLno2Fq6ooGNJLAsIdwaPeBZ3AwrbYpQvys2vWREme5CU1amng87nmz\nQep7ntUJ31RVVUZBk5yGF0PZi+YsMQ9hse07E0RMynkcNZxnq7HZauvyuVvFBQOM\ngxZowRmQQwKBgANAIZBgtGNPcTct4tVjN7NFxLevbncwD4QAIgtWH3aL+GLdodOe\nxPFoDb83brjs6XT5p62DUKJYsEeiK3b4PxN7Y0fKh2O2cMFqA0JiDHLweBaCoKz8\niQnLMprU3LRiBaacirV4WZbv4zYjZMe3roOhyIRk7Hn8kGePchnBvdmnAoGBAK6G\nul0B9YxXcjVCzi89daV87/KFKL5sYUPUNYrWvO2uML0GxdMI8EJvR8jFPLgVfvSE\nRmAtOuZ9AbT/J5tUnWOAvpUk9RCEygkFVEBBN+8Y1RWziLUT77PNAmrCJNZU5K6G\n29qlpWfRTXmz1H8sxiF/nmjubj/V/baldPih1cjFAoGBAK6YCzVi7nKgCctIQS2W\nAfQKyBsNm5LJCaA/ci/KKZ6eucF/7updqea42BkUIxip5TnsdWj08E3i3J7kvMmA\neQTtZ6xvvBVDtFf4WaDbpv0Rog6D9LINcYJbVblbzFwo/KEWYM4h59z/YN9vpxav\nKf5FEfpjYMzkhLHvr92ZfVkb\n-----END PRIVATE KEY-----\n",
  scopes
});

// It performs a request to the Google Analytics API to fetch the pageviews number in the last 30 days.
async function getMetric(metric, startDate, endDate) {
  // We'll await 3 seconds for Google analytics
  await setTimeout[Object.getOwnPropertySymbols(setTimeout)[0]](
    Math.trunc(1000 * Math.random())
  );

  const result = await analytics.data.ga.get({
    auth: jwt,
    ids: `ga:${viewId}`,
    "start-date": startDate,
    "end-date": endDate,
    metrics: metric
  });

  const res = {};
  res[metric] = {
    value: parseInt(result.data.totalsForAllResults[metric], 10),
    start: startDate,
    end: endDate
  };
  return res;
}

function parseMetric(metric) {
  let cleanMetric = metric;
  if (!cleanMetric.startsWith("ga:")) {
    cleanMetric = `ga:${cleanMetric}`;
  }
  return cleanMetric;
}

function getData(
  metrics = ["ga:users"],
  startDate = "30daysAgo",
  endDate = "today"
) {
  // ensure all metrics have ga:
  const results = [];
  for (let i = 0; i < metrics.length; i += 1) {
    const metric = parseMetric(metrics[i]);
    results.push(getMetric(metric, startDate, endDate));
  }

  return results;
}
module.exports = { getData };
