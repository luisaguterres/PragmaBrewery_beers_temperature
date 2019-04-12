const expect = require('chai').expect;
const app = require('../app/views/home/index.ejs').updateStatus;

describe('Index page', function(){
	var listContainers = [{
		"name": "Porter",
		"tempMin": 6,
		"tempMax": 8,
		"temp_actual": 0,
		"status": ""		 
	}];

	it('Test the Test', function(){
		result = app.testTheTest();
		expect(result).to.equal('Hello');
	})
})