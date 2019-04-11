var beerModel = require('../app/controllers/beer');
// load Unit.js module
var test = require('unit.js');

//test beers list
describe('Calling the beers list', function(){
	it('Should return a list of beers.', function(){
		beersList = beerModel.listBeers();
		beersList.should.have.length(11);
	});
});

//add beer
describe('New Beer', function() {
	it('Should save a new beer', function(done) {
      var beer = [{
		"name": "Porter",
		"tempMin": 6,
		"tempMax": 8
		}];
      beerModel.add_beer(function(err) {
        if (err) done(err);
        else done();
      });
    });
});