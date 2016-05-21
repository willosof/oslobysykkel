var assert = require('assert');
var oslobysykkel = require('../index');

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
