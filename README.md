[![npm version](https://badge.fury.io/js/oslobysykkel.svg)](https://badge.fury.io/js/oslobysykkel)
[![Downloads](https://img.shields.io/npm/dm/oslobysykkel.svg)](https://npmjs.com/oslobysykkel)
[![Dependency Status](https://david-dm.org/willosof/oslobysykkel.svg)](https://david-dm.org/willosof/oslobysykkel)
[![Build Status](https://travis-ci.org/willosof/oslobysykkel.svg?branch=master)](https://travis-ci.org/willosof/oslobysykkel)

## Features
* getAvailability(result_cb)
  Get availability information on all stations in the oslobysykkel system.

* getAvailabilityByStationId(id, result_cb)
  Using the id you find in getAvailability(), you can narrow your request down using this function.
  **Be aware:** for now this function is just a client side processed version of getAvailability()

* getStations(result_cb)
  List all stations in the system. Here you'll get the id's you need to make sense of getAvailability() and getAvailabilityByStationId()

### Getting Started

In node.js:

```
npm install oslobysykkel
```

```javascript
var oslobysykkel = require('oslobysykkel');

// Get all availability data currently available from oslobysykkel/sharebike api
oslobysykkel.getAvailability(function(result) { ... });

// Get availability data currently available for one single station
oslobysykkel.getAvailabilityByStationId(stationId, function(result) { ... });

// Get all stations and their IDs
oslobysykkel.getStations(function(result) { ... });
```

### Git
* [https://github.com/willosof/oslobysykkel](https://github.com/willosof/oslobysykkel)
* [git@github.com:willosof/oslobysykkel.git](git@github.com:willosof/oslobysykkel.git)


### Future research:
* https://oslobysykkel.no/api/internal/stations
