var containerModel = require('../app/controllers/container');
// load Unit.js module
var test = require('unit.js');
var expect = require('chai').expect;

//list containers
describe('List containers', function(){
	it('Should list containers', function(){
		containersList = containerModel.listContainers;
		console.log(containersList.lenght);
		//test.assert(typeof containersList == 'function');
		expect(containersList).to.be.an('array');
		containersList.Should.be.an.('array');
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