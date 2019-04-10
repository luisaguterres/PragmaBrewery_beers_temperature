module.exports = function(application){

    application.get('/beers', function(req,res){
    	application.app.controllers.beer.listBeers(application, req, res);
    });

    application.post('/beers/new_beer', function(req,res){
    	application.app.controllers.beer.add_beer(application, req, res);
    });
}