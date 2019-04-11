/** 
*List the beers 
**/
module.exports.listBeers = function(application, req, res){
	var connection = application.config.dbConnection();
	var beerModel = new application.app.models.BeerDAO(connection);

	beerModel.getListBeers(function(error, result){
		res.render('beer/new_beer', {beers : result});				
	});
}

/** 
*Function to save a new beer 
**/
module.exports.add_beer = function(application, req, res){
	var beer = req.body;

	req.assert('beer_name', 'The Name is cannot be empty.').notEmpty();
	req.assert('temp_min', 'The Minimum Temperature is cannot be empty.').notEmpty();
	req.assert('temp_max', 'The Maximum Temperature is cannot be empty.').notEmpty();

	var error = req.validationErrors();

	if(error){
		res.render('beer/new_beer', {validation : error, beer : beer});
		return;
	}

	var connection = application.config.dbConnection();
	var beerModel = new application.app.models.BeerDAO(connection);

	console.log("SAVE ");
	beerModel.saveBeer(beer, function(error, result){
		res.redirect('/');
	});	
} 