function Beer(connection){

	this._beers = [{
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
}

//Listar cervejas cadastradas
Beer.prototype.getListBeers = function(callback){
	//console.log(this._beers);
	callback = this._beers;
	console.log(this._beers);
	//return this._beers;
}

//cadastrar nova cerveja?

module.exports = function(){
    return Beer;
}