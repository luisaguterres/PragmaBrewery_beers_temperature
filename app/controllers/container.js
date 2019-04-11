/** 
*Get the containers in the database and list them
**/
module.exports.listContainers = function(application, req, res){
	var connection = application.config.dbConnection();	
	var containerBeerModel = new application.app.models.ContainerBeerDAO(connection);

	containerBeerModel.getListContainers(function(error, result){
		var beers_containers = measured_temperature(result);
		res.render('home/index', {containers : beers_containers});
	});
}

/** 
*Set the minimum temperature to simulate the measured temperature at the start
*@param {array} input the containers' list
*@return {array} list of the containers with the measured temperature set
**/
measured_temperature = function(list){
	for (var i = 0; i < list.length; i++) {
		list[i].temp_measured = list[i].temp_min;
	}
	return list;
}

/** 
*Load the page to include a new container and brings the beers list
**/
module.exports.add_container = function(application, req, res){
	var connection = application.config.dbConnection();
	var beerModel = new application.app.models.BeerDAO(connection);

	beerModel.getListBeers(function(error, result){
		res.render('container/new_container', {beers : result});				
	});
}

/** 
*Save a new container in the database
**/
module.exports.save_container = function(application, req, res){
	var container = req.body;

	var connection = application.config.dbConnection();
	var containerModel = new application.app.models.ContainerDAO(connection);

	console.log("SAVE ", container);
	containerModel.saveContainer(container, function(error, result){
		res.redirect('/');
	});	
}

/** 
*Remove a container 
**/
module.exports.remove_container = function(application, req, res){
	var connection = application.config.dbConnection();
	var containerModel = new application.app.models.ContainerDAO(connection);
	var id_noticia = req.query;

	containerModel.removeContainer(container, function(error, result){
		res.render('home/index');
	});	
}