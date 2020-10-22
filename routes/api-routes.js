var Workout = require("../models");
var db = require("../models");

module.exports= function(app){
  app.get("/api/workouts", (req, res) => {
    Workout.find()
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.json(err);
      });
  });
    
  
   
  app.post("/api/workouts", function(req,res){    
    
    db.Workout.create({}).then(data=>{
      console.log("data", data)
      res.json(data)
    })
    .catch(err => {
      res.json(err);
    });
  })
           
            
        
    

    // app.post("/exercise", (req, res) => {
    //   const myNewWorkout = newWorkout({ name: req.body.exercise, age: req.body.age })

    //       workout.save().then(response=> {
            

    //           console.log("here is the response: ", response);
              
    //           }).catch(err => {
    //           console.log("here is the error: ", err);
    //           })
    //     });
      }