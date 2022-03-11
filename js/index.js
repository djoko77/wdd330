//import { getJSON, getLocation } from './eqUtilities.js';

import QuakesController from './QuakesController.js';

const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();

// const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

// async function testGetQuakesForLocation() {
//     // call the getLocation function to get the lat/long
//     let locResp = await getLocation();

//     console.log("get here");
//     console.log(locResp);
//     const location = locResp.coords;
//     console.log(location);
//     // use that information to build out the correct URL
    
    
//     const geoUrl = baseUrl + "&latitude=&longitude=&maxradiuskm=100";// add location information here
//     // use the url to request the correct quakes 
  
//     //log out the quakes for now.
//   }
//   //getQuakesForLocation();
//   testGetQuakesForLocation();

