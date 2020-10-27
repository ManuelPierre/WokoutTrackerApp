const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3000;
const Workout = require("./models/workoutModel.js");

const db = require("./models");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/mongoose_skeleton", { 
    useNewUrlParser: true, 
userFindAndModify: false
// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false
});
// require('./routes/api-routes.js')(app)
// app.use(require("./routes/view-routes.js"));
    require ("./routes/api-routes.js")(app);
    require("./routes/html-routes.js")(app);

    app.listen(3000, () => (
        console.log("app running on port 3000!") 
    ));

