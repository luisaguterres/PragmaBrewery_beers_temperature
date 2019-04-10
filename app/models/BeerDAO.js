function BeerDAO(connection){

	this._connection = connection;

}

// List beers
BeerDAO.prototype.getListBeers = function(callback){
	this._connection.query('SELECT * FROM beers ORDER BY beer_name ASC', callback);
}

// add a new beer

BeerDAO.prototype.saveBeer = function(beer, callback){
	console.log("SAlvar cerveja");
	this._connection.query('INSERT INTO beers SET ?', beer, callback);
}

module.exports = function(){
    return BeerDAO;
}