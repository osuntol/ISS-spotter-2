const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

// fetchMyIP ((error, ip) => {
//   if (error) {
//     console.log("It didnt work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:" . ip)
// })

fetchCoordsByIP('76.86.127.30', (error, coordinates) => {
  if (error){
    console.log("It didnt work!", error)
    return;
  }
  console.log('It worked! Returned coordinates:' , coordinates)
})
