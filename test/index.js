var assert = require('assert');
var oslobysykkel = require('../index');
var clientId = '647bcbaf0a148724bab0a654e9215461'

describe('getStations', function() {
  it('well played', function(done) {
    oslobysykkel.getStations(clientId, function(result) {
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
    oslobysykkel.getAvailability(clientId, function(result) {
      if (result && result !== undefined) {
        if (result.result !== undefined && result.error == 0) {
          done();
        }
      }
    });
  });
});
