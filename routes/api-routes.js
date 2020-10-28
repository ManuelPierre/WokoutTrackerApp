
const  Workout  = require("../models");
var db = require("../models");
const path = require("path");

module.exports= function(app){

  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "./public/index.html"));
  });

  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/stats.html"));
  });       
    

    

  app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/exercise.html"));
  });
  

  app.get(`/api/workouts/range`, (req, res) => {
    console.log("here first");
    db.Workout.find({}).then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
        
      });
  });

  app.get("/api/workouts", (req, res) => {
    console.log("here first");
    db.Workout.find({}).then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
        
      });
  });

  app.get("/all", (req, res) => {
    console.log("here first");
    db.Workout.find({}).then(data => {
        res.json(data);
      })
      .catch(err => {
        res.json(err);
        
      });
  });

  app.post("/api/workouts", function(req,res){
    console.log('heres')
    console.log(req.body)
    db.Workout.create({}).then(data=>{
      console.log("data", data)
    res.json(data)
    })
    .catch(err => {
      res.json(err);
    });
  })

  app.put("/api/workouts/:id", ({body, params}, res) => {
     db.Workout.findByIdAndUpdate( params.id, { $push: {exercises: body} }, { new: true })
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    })
  

 


    

 
  

      }
    
    