function ContainerDAO(connection){

	this._connection = connection;
}

/** 
*Insert a new container in the database 
**/
ContainerDAO.prototype.saveContainer = function(container, callback){
	this._connection.query('INSERT INTO containers SET ?', container, callback);
}

/** 
*Remove one of the containers from the database 
**/
ContainerDAO.prototype.removeContainer = function(container, beerKey){
	this._connection.query('DELET FROM containers WHERE id_container = '+ container, callback);
}

module.exports = function(){
    return ContainerDAO;
}