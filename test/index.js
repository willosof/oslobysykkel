var assert = require('assert');
var Oslobysykkel = require('../index');
var clientId = '647bcbaf0a148724bab0a654e9215461'
var oslobysykkel = new Oslobysykkel(clientId);

describe('getStations', function() {
  it('well played', function(done) {
    oslobysykkel.getStations(function(result) {
      if (result && result !== undefined) {
        if (result.result !== undefined && result.error == 0) {
          done();
        }
      }
    });
  });
});

describe('getAvailability', function() {
  it('well played', function(done) {
    oslobysykkel.getAvailability(function(result) {
      if (result && result !== undefined) {
        if (result.result !== undefined && result.error == 0) {
          done();
        }
      }
    });
  });
});
