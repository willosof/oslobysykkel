## Features
* getAvailability(result_cb)
Get availability information on all stations in the oslobysykkel system.

* getAvailabilityByStationId(id, result_cb)
Using the id you find in getAvailability(), you can narrow your request down using this function.
**Be aware:** for now this function is just a client side processed version of getAvailability()


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
```

### Git
* [https://github.com/willosof/oslobysykkel](https://github.com/willosof/oslobysykkel)
* [git@github.com:willosof/oslobysykkel.git](git@github.com:willosof/oslobysykkel.git)
