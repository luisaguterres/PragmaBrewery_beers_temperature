function ContainerDAO(connection){

	this._connection = connection;
}

// Add a new container
ContainerDAO.prototype.saveContainer = function(container, callback){
	this._connection.query('INSERT INTO containers SET ?', container, callback);
}

// Remove the beer from the container
ContainerDAO.prototype.removeContainer = function(container, beerKey){
	this._connection.query('DELET FROM containers WHERE id_container = '+ container, callback);
}

module.exports = function(){
    return ContainerDAO;
}