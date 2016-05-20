Features:
* getAvailability(result_cb)
* getAvailabilityByStationId(id, result_cb)

## Getting Started

In node.js:

```
npm install oslobysykkel
```

```javascript
var oslobysykkel = require('oslobysykkel');

// Get all availability data currently available from oslobysykkel.no api
oslobysykkel.getAvailability(function(result) { ... });

// Get availability data currently available for one single station
oslobysykkel.getAvailabilityByStationId(stationId, function(result) { ... });
```
