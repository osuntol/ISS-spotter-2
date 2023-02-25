const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');


// fetchMyIP ((error, ip) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:" . ip)
// })

let coords = {
  latitude: '34.1083449',
  longitude: '-117.2897652'
}


fetchCoordsByIP('76.86.127.30', (error, coordinates) => {
  if (error){
    console.log("It didnt work!", error)
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates)
})


fetchISSFlyOverTimes(coords, (error, passTimes) => {
  if(error) {
    console.log ("It didnt work!" , error);
    return;
  }
  console.log('It worked! Returned flyover times:' , passTimes);
})