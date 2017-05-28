/*
Copyright (c) 2016, William Viker <william.viker@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/

var got = require("got");

var v1 = function(options) {}

var getAvailability = function(clientId, cb) {
	got("https://oslobysykkel.no/api/v1/stations/availability", { 
		json: true,
		headers: { 'Client-Identifier' : clientId }
	})
		.then(response => {
			cb({ error: 0, result: response.body });
		})
		.catch(error => {
			cb({ error: 1, errstr: error.response.body });
		})
}

var getAvailabilityByStationId = function(id, clientId, idcb) {
	getAvailability(clientId, avres => {
		if (avres.error == 0) {
			for (var idx in avres.result.stations) {
				if (avres.result.stations[idx].id == id) {
					idcb(avres.result.stations[idx]);
					return;
				}
			};
			idcb({error: 2, result: "No station with ID " + id + " found"})
		} else (
			idcb(avres)
		);
	});
}


var getStations = function(clientId, cb) {
	got("https://oslobysykkel.no/api/v1/stations", { 
		json: true,
		headers: { 'Client-Identifier' : clientId }
	})
		.then(response => {
			cb({ error: 0, result: response.body });
		})
		.catch(error => {
			cb({ error: 1, errstr: error.response.body });
		})
}

var oslobysykkel = v1;

oslobysykkel.getAvailability = getAvailability;
oslobysykkel.getAvailabilityByStationId = getAvailabilityByStationId;
oslobysykkel.getStations = getStations;

module.exports = oslobysykkel;
