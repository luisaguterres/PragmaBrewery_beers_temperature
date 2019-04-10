module.exports.listContainers = function(application, req, res){
	var connection = application.config.dbConnection();	
	var containerBeerModel = new application.app.models.ContainerBeerDAO(connection);

	containerBeerModel.getListContainers(function(error, result){
		var beers_containers = add_actual_temperature(result);
		res.render('home/index', {containers : beers_containers});
	});
}

add_actual_temperature = function(list){
	for (var i = 0; i < list.length; i++) {
		list[i].temp_actual = list[i].temp_min;
	}
	return list;
}

module.exports.open_truck = function(application, req, res){
	//generate a value that represents the temperature that will be add to the 
	// actual beers' temperature
	console.log("Controllers >> ", application.containers);
	add_temp = Math.floor(Math.random()* 1 ) + 0.5;
	for(var i = 0; i < containers.length; i++){
		containers[i].temp_actual += add_temp;	
	}
	res.render('home/index', {containers : result});
}

module.exports.add_container = function(application, req, res){
	var connection = application.config.dbConnection();
	var beerModel = new application.app.models.BeerDAO(connection);

	beerModel.getListBeers(function(error, result){
		res.render('container/new_container', {beers : result});				
	});
}

module.exports.save_container = function(application, req, res){
	var container = req.body;

	req.assert('id_beer', '').notEmpty();

	var error = req.validationErrors();

	if(error){
		res.render('container/new_container', {validation : error, container : container});
		return;
	}

	var connection = application.config.dbConnection();
	var containerModel = new application.app.models.ContainerDAO(connection);
	
	containerModel.saveContainer(container, function(error, result){
		res.render('container/new_container');
	});	
}

module.exports.remove_container = function(application, req, res){
	var connection = application.config.dbConnection();
	var containerModel = new application.app.models.ContainerDAO(connection);
	var id_noticia = req.query;

	containerModel.removeContainer(container, function(error, result){
		res.render('home/index');
	});	
}