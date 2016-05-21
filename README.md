[![npm version](https://badge.fury.io/js/oslobysykkel.svg)](https://badge.fury.io/js/oslobysykkel)
[![Downloads](https://img.shields.io/npm/dm/oslobysykkel.svg)](https://npmjs.com/oslobysykkel)
[![Dependency Status](https://david-dm.org/willosof/oslobysykkel.svg)](https://david-dm.org/willosof/oslobysykkel)
[![Build Status](https://travis-ci.org/willosof/oslobysykkel.svg?branch=master)](https://travis-ci.org/willosof/oslobysykkel)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/badges/shields.svg?style=social&label=Star&maxAge=2592000?style=plastic)](https://github.com/willosof/oslobysykkel)

## Features
* **getStations(result_cb)**
List all stations in the system. Here you'll get the id's you need to make sense of getAvailability() and getAvailabilityByStationId()

* **getAvailability(result_cb)**
Get availability information on all stations in the oslobysykkel system.

* **getAvailabilityByStationId(id, result_cb)**
Using the id you find in getAvailability(), you can narrow your request down using this function.
*Notice: for now this function is just a client side processed version of getAvailability()*


### Getting Started

In Node.js:

```
npm install oslobysykkel
```

```javascript
var oslobysykkel = require('oslobysykkel');

// Get all stations and their IDs
oslobysykkel.getStations(response => {
	console.log(response);
});

// Get current availability data
oslobysykkel.getAvailability(response => {
	console.log(response);
});

// Get availability data for one specific station
var stationId = 26;
oslobysykkel.getAvailabilityByStationId(stationId, response => {
	console.log(response);
});

```

### Git
* [https://github.com/willosof/oslobysykkel](https://github.com/willosof/oslobysykkel)
* `git@github.com:willosof/oslobysykkel.git`


### Data Sources
* https://oslobysykkel.no/api/v1/stations/availability
* https://oslobysykkel.no/api/v1/stations

### Other
#### A link that shows where new stations will appear:
* https://oslobysykkel.no/api/internal/stations (ready=false is the coming ones)

### Author
William Viker <<william.viker@gmail.com>>
