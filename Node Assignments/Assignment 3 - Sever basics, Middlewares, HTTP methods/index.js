const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000;
// 1. Create a basic express server and display an image of your choice on the homepage using static files.
app.use(express.static(path.join(__dirname, "public")));

// 2. Show `Hello ${name}` message on path `/hello/${name}` using appropriate HTTP method where name should get replaced by your name. You need to pass your name as a parameter to the path here.
app.get("/hello/:name", (req, res) => {
  res.send(`<h1>Hello ${req.params.name}</h1>`);
});
// 3. Create a middleware function to log the request where you are console logging the current date and it is sending `Request logged` message as a response to `/request` path
let logger = (req, res, next) => {
  console.log(Date());
  res.send("<h1>Request logged!</h1>");
  next();
};
app.use("/request", logger);
// 4. Create an error on `/error` path and pass it to the next function. Depending on the type of error message you are showing, use proper error status codes to show the error.
let errorFunct = (req, res, next, err) => {
  console.log("Error");
  next();
};
app.use("/error", errorFunct, (req, res, err) => res.send(`${err}`));
// 5. Create a basic form on the path `/form` and add a post request to this form. This is a register form which should have name, email, password and confirm password fields. You can use any view engine for this. In the post method, add validation to the form. Validation criteria is given below:
//    a. Email should be valid email
//    b. Password and confirm password should match
//    c. Password's minimun length should be greater than 5

app.listen(PORT, () => console.log("Server started on port ", PORT));
