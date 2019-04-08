const fs = require('fs');

function Container(connection){

	let rawdata = fs.readFileSync('./db/containers.json');
	this._connection = rawdata

}

Container.prototype.getListContainers = function(callback){
	let containers = JSON.parse(this._connection);  
	console.log(containers);
	return containers;
}

Container.prototype.addBeer = function(beerKey){
	this._container.set({
		beer: beerKey
	})
}

Container.prototype.removeBeer = function(beerKey){
	this._container.remove(beerKey);
}

module.exports = function(){
    return Container;
}