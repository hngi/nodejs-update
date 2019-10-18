const Tracker = require('../models/tracker')
const geoip = require('geoip-lite')

const getTracker = (fileUrlId, { ip, device }) => {
  try {
    ip = '41.190.2.1';
    const geo = geoip.lookup(ip);
    const device_type = getDeviceType(device);

    Tracker.create({
      fileUrlId,
      ip,
      country: geo.country,
      city: geo.city,
      device: device_type,
    });
  } catch (error) {
    console.log(error);
  }
};


/** Formats the result from `express-device` package for storage in the DB
 * @private
 * @param  {Object} device
 */
const getDeviceType = (device) => { 
  return (['tv', 'bot', 'car'].includes(device.type) ? 'other' : device.type);
};


module.exports = getTracker