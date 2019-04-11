function ContainerBeerDAO(connection){

	this._connection = connection;
}

/** 
*Bring the list of ocntainers with the beers data  
**/
ContainerBeerDAO.prototype.getListContainers = function(callback){
	this._connection.query('SELECT * FROM containers_beers', callback);
}

module.exports = function(){
    return ContainerBeerDAO;
}