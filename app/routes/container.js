module.exports = function(application){

	containers = [{
		beer: 'IPA',
		temp_actual: '5'
	},
	{
		beer: 'Lager',
		temp_actual: '4'
	},
	{
		beer: 'Pilsner',
		temp_actual: '4'
	},
	{
		beer: 'Pale Ale',
		temp_actual: '4'
	}];

	


    application.get('/', function(req,res){

        /**var containerModel = new application.app.models.containerModel;

        containerModel.getListContainers(function(error, result){
        	res.render("home/index", {containers: result});
        });
        console.log(">>>>> Listar containers");**/

        res.render("home/index");

    });
}