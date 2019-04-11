module.exports = function(application){

	application.get('/', function(req,res){
    	application.app.controllers.container.listContainers(application, req, res);
    });

	application.get('/add_container', function(req, res){
		application.app.controllers.container.add_container(application, req, res);
	});

	application.post('/save_container', function(req, res){
		application.app.controllers.container.save_container(application, req, res);
	});

	application.get('/remove_container', function(req, res){
		application.app.controllers.container.remove_container(application, req, res);
	});
}	