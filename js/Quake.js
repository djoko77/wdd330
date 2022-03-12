import { getJSON } from './eqUtilities.js';

// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    radius = prompt("Please specify the radius coverage: ", "100")

    let startDate = this.getStartDate();

    let endDate = this.getEndDate();

    console.log(startDate);
    
    console.log(endDate);

    const query =
      this.baseUrl +
      `&starttime=${startDate}&endtime=${endDate}&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`;
    console.log(query);
    this._quakes = await getJSON(query);
    return this._quakes;
  }

  getStartDate(startDate) {

    startDate = prompt("Please indicate start date: ", "2021-12-01");

    return startDate;
  }

  getEndDate(endDate) {

    endDate = prompt("Please indicate end date: ", "2021-12-31");

    return endDate;
  }
 
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}