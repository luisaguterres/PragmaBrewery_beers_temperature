var containerModel = require('../app/controllers/container');
// load Unit.js module
var test = require('unit.js');

//list containers
describe('List containers', function(){
	it('Should list containers', function(){
		containersList = containerModel.listContainers;
		console.log((typeof containersList));
		test.assert(typeof containersList == 'function');
	}) ;
});

//add container
describe('Add a container', function(){
	it('Should save a new container', function(done) {
      var container = [{
		"id_beer": 1
		}];
      containerModel.add_container(function(err) {
        if (err) done(err);
        else done();
      });
    });
});

//open truck
describe('Open truck', function(){
	var listContainers = [{
		"name": "Porter",
		"tempMin": 6,
		"tempMax": 8,
		"temp_actual": 0,
		"status": ""		 
	}];

	it('Should insert the actual temperature', function() {
		beersList = containerModel.actual_temperature(listContainers);
		console.log(listContainers);
		beersList.Should.have.property('temp_actual').equal(6);
		console.log('test',beerList.Should.have.property('temp_actual'));
	});

/*	it('Should update the beers temperature', function() {
		beersList = containerModel.updateContainersTemperature(listContainers);
		beersList.Should.have.property('status').equal('Stable');
		beersList.Should.have.property('temp_actual').equal(6.5);
	});
*/
});