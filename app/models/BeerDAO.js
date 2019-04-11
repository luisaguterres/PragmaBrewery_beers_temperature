function BeerDAO(connection){

	this._connection = connection;

}

/** 
*Bring the beers list from the database in ascending order by beer name
**/
BeerDAO.prototype.getListBeers = function(callback){
	this._connection.query('SELECT * FROM beers ORDER BY beer_name ASC', callback);
}

/** 
*Insert a new beer in the database
**/
BeerDAO.prototype.saveBeer = function(beer, callback){
	console.log("SAlvar cerveja");
	this._connection.query('INSERT INTO beers SET ?', beer, callback);
}

module.exports = function(){
    return BeerDAO;
}