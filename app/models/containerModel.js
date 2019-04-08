function Container(connection){

	this._container = new Map();

}

Container.prototype.getListContainers = function(){
	return this._container;
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