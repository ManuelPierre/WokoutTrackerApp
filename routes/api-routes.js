var workout = require("../models");

module.exports= function(app){
    app.get("/all", function (req, res){
        workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
        });
    

    app.post("/submit", ({body}, res) => {
        const workout = new workout(body);

        workout.Date();
        
      
        workout.create(workout)
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });
    }