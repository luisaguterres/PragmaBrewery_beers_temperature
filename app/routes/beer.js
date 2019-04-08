module.exports = function(application){

    application.get('/beers', function(req,res){

        var beerModel = new application.app.models.beerModel;

        beerModel.getListBeers(function(error, result){
        	res.render("beer/new_beer");
        });
    });
}