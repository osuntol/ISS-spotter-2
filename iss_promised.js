const request = require('request-promise-native');


function fetchMyIP() {
  return request('https://api.ipify.org?format=json');
};

const fetchCoordsByIP = function(body) {
  const ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`)
};

function fetchISSFlyOverTimes(body) {
  const { latitude, longitude } = JSON.parse(body);
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`
  return request(url);

}

function nextISSTimesForMyLocation() {
 return fetchMyIP()
.then(fetchCoordsByIP)
.then(fetchISSFlyOverTimes)
.then((data) => {
  const { response } = JSON.parse(data);
  return response;
})

}

module.exports = {
  // fetchMyIP,
  // fetchCoordsByIP,
  // fetchISSFlyOverTimes,
  nextISSTimesForMyLocation
}