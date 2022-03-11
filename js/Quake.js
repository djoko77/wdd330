import { getJSON } from './eqUtilities.js';

// Quake Model
export default class Quake {
  constructor() {
    this.baseUrl =
      'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-02-01&endtime=2022-02-28';
    // this is where we will store the last batch of retrieved quakes in the model.  I don't always do this...in this case the api doesn't have an endpoint to request one quake.
    this._quakes = [];
  }
  async getEarthQuakesByRadius(position, radius = 100) {
    // use the getJSON function and the position provided to build out the correct URL to get the data we need.  Store it into this._quakes, then return it
    const query = this.baseUrl + `&latitude=${position.latitude}&longitude=${position.longitude}&maxradiuskm=${radius}`;
    console.log(position.latitude);
    console.log(position.longitude);
    console.log(query);
    this._quakes = await getJSON(query);
    return this._quakes;
  }
  getQuakeById(id) {
    // filter this._quakes for the record identified by id and return it
    return this._quakes.features.filter(item => item.id === id)[0];
  }
}