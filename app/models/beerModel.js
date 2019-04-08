const fs = require('fs');

function beerModel(connection){
	
}

//Listar cervejas cadastradas
beerModel.prototype.getListBeers = function(callback){
	let rawdata = fs.readFileSync('./db/beers.json');	  
	let beers = JSON.parse(rawdata);  
	return beers;
}

//cadastrar nova cerveja?

module.exports = function(){
    return beerModel;
}