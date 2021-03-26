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
// let errorFunct = (req, res, next) => {
//   if(res.status(404)){
//     res.send("<h1>Page Not found!</h1>")
//   }else if(res.status(401)){
//     res.send('<h1>Unauthorized</h1>')
//   }
//   }else if(res.status(500)){
//     res.send('<h1>Internal Server Error</h1>')
//   }else{
//     res.status(403).send('<h1>Error found!</h1>')
//   }
//   next()
// };
// app.use("/error", errorFunct);
app.use((req, res, next) => {
  if (req.status(403)) {
    res.send("<h1>ERROR FOUND</h1>");
    next();
  } else if (req.status(404)) {
    res.send("<h1>PAGE NOT FOUND</h1>");
    next();
  } else if (req.status(500)) {
    res.send("<h1>INTERNAL SERVER ERROR</h1>");
    next();
  } else if (req.status(200)) {
    res.send("<h1>COnnected!</h1>");
    next();
  } else console.log("No error");
});
// app.use((req, res, next) => {
//   res.status(404).send("<h1>Page not found</h1>");
//   console.log("Error");
// });
// 5. Create a basic form on the path `/form` and add a post request to this form. This is a register form which should have name, email, password and confirm password fields. You can use any view engine for this. In the post method, add validation to the form. Validation criteria is given below:
//    a. Email should be valid email
//    b. Password and confirm password should match
//    c. Password's minimun length should be greater than 5

app.listen(PORT, () => console.log("Server started on port ", PORT));
