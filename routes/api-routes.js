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
           
  // app.post("/submit", ({ body }, res) => {
  //   db.Note.create(body)
  //     .then(({ _id }) => db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true }))
  //     .then(dbUser => {
  //       res.json(dbUser);
  //     })
  //     .catch(err => {
  //       res.json(err);
  //     });
  // });
            
        
    

    app.put("/api/workouts/:id", ({ body }, res) => {
   
      db.Workout.create(body)
      .then(({ _id }) => db.Workout.findOneAndUpdate({}, { $push: { Workout: _id } }, { new: true }))
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
      }