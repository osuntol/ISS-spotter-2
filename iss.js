const request = require('request');

// fetch IP address
const fetchMyIp = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {
    if (error) {
      return callback(error, null);
    }
    // if non-200 status, assume server error
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const ip = JSON.parse(body).ip;
    callback(null, ip);
  })
}

const fetchCoordsByIP = function (ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {

  if (error) {
    callback(error, null);
    return;
  }

  const parsedBody = JSON.parse(body);

  if (!parsedBody.success) {
    const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
    callback(Error(message), null);
    return;
  } 

  const { latitude, longitude } = parsedBody;

  callback(null, {latitude, longitude});
});
}


module.exports = { 
  fetchMyIp,
  fetchCoordsByIP
 }