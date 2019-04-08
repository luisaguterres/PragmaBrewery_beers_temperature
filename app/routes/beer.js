module.exports = function(application){

	beers = [{
		name: "Pilsner",
		tempMin: 4,
		tempMax : 6
	},

	{
		name: "IPA",
		tempMin: 5,
		tempMax: 6
	},

	{
		name: "Lager",
		tempMin: 4,
		tempMax: 7
	},

	{
		name: "Stout",
		tempMin: 6,
		tempMax: 8
	},

	{
		name: "Wheat beer",
		tempMin: 3,
		tempMax: 5
	},

	{
		name: "Pale Ale",
		tempMin: 4,
		tempMax: 6
	}];


    application.get('/beers', function(req,res){

        /**var beerModel = new application.app.models.beerModel;

        beerModel.getListBeers(function(error, result){
        	res.render("beer/new_beer", {beers: result});
        });
        console.log(">>>>> Listar Cerveja");**/

        
	res.render("beer/new_beer");
    });
}