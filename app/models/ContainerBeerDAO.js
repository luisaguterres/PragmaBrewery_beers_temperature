function ContainerBeerDAO(connection){

	this._connection = connection;
}

// List the containers
ContainerBeerDAO.prototype.getListContainers = function(callback){
	this._connection.query('SELECT * FROM containers_beers', callback);
}

module.exports = function(){
    return ContainerBeerDAO;
}