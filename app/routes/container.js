module.exports = function(application){

	application.get('/', function(req,res){

        var containerModel = new application.app.models.containerModel;

        containerModel.getListContainers(function(error, result){
        	res.render("home/index", {containers : result});
        });
  });
}