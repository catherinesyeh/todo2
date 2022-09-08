// load express app, environment, and mongoose (to connect to database)
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// load models
const TodoTask = require("./models/TodoTask");

// configure environment
dotenv.config();

// connect to mongodb with connection string (saved in .env file)
mongoose.connect(process.env.DB_CONNECT, { useNewURLParser: true }, () => {
    console.log("Connected to db!");
    // specify port number & tell express app to listen to the port
    // only run after connection is made
    app.listen(3000, () => console.log("Server Up and running"));
});

// let app access public files
app.use("/static", express.static("public"));

// allows us to extract data from todo app
app.use(express.urlencoded({ extended: true }));

// configure view engine for ejs files
app.set("view engine", "ejs");

// GET method is used to pass relatively non-confidential information
// visible in browser's url: e.g., http://localhost:3000/
app.get('/', (req, res) => {
    var test = TodoTask.find({}, (err, tasks) => {
        // view app in browser with data (i.e., tasks)
        res.render("todo.ejs", { todotasks: tasks });
    });
});

// POST method
// insert data into database when add button is pressed
app.post('/', async (req, res) => {
    // added async keyword to allow use of await
    const todoTask = new TodoTask({
        content: req.body.content
    });

    try { // try to add data, catch errors
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        console.log(err);
        res.redirect("/");
    }
})

// UPDATE task when pencil icon is pressed by finding id and rendering new template
app
    .route("/edit/:id")
    .get((req, res) => {
        const id = req.params.id;
        TodoTask.find({}, (err, tasks) => {
            // load edit view for selected task
            res.render("todoEdit.ejs", { todotasks: tasks, idTask: id });
        });
    })
    .post((req, res) => {
        const id = req.params.id;
        // update task data in database once user confirms
        TodoTask.findByIdAndUpdate(id, { content: req.body.content }, err => {
            if (err) return res.send(500, err);
            res.redirect("/");
        });
    });

// DELETE an existing task when the X button is pressed
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    // look for task with matching id and remove it from database
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});