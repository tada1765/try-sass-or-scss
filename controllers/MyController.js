
module.exports = function(app){

    // get data from database and pass it to view (render a view).
    app.get("/", function(req, res){
        res.render('index');
    });

    // get data from the view and add it to database.
    app.post("/pageName", function(req, res){
        // ...
    });

    // delete the requested item from databases.json.
    app.delete("/pageName/:item", function(req, res){
        // ...
    });
};