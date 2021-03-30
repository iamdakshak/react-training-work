const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const { check, validationResult } = require("express-validator");

const app = express();
const PORT = process.env.PORT || 5000;

//Express Handlebars Middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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
const messages = {
  403: "<h1>ERROR FOUND</h1>",
  404: "<h1>PAGE NOT FOUND</h1>",
  500: "<h1>INTERNAL SERVER ERROR</h1>",
};

app.use("/error", (req, res, next) => {
  // res.status(404);
  if (messages[res.statusCode]) {
    console.log(messages[res.statusCode]);
    res.send(messages[res.statusCode]);
    next();
  } else {
    console.log("No issues here.");
    res.send("<h1>Connected successfully!</h1>");
    next();
  }
});

// app.use((req, res, next) => {
//   if (res.statusCode === 403) {
//     res.send("<h1>ERROR FOUND</h1>");
//     next();
//   } else if (res.statusCode === 404) {
//     res.send("<h1>PAGE NOT FOUND</h1>");
//     next();
//   } else if (res.statusCode === 500) {
//     res.send("<h1>INTERNAL SERVER ERROR</h1>");
//     next();
//   } else if (res.statusCode === 200) {
//     res.send("<h1>COnnected!</h1>");
//     next();
//   } else console.log("No error");
// });

// 5. Create a basic form on the path `/form` and add a post request to this form. This is a register form which should have name, email, password and confirm password fields. You can use any view engine for this. In the post method, add validation to the form. Validation criteria is given below:
//    a. Email should be valid email
//    b. Password and confirm password should match
//    c. Password's minimun length should be greater than 5
app.get("/form", (req, res) =>
  res.render("index", {
    title: "Signup Form",
  })
);
app.post(
  "/register",
  [
    check("name").not().isEmpty().withMessage("Name is required"),
    check("email", "Email is required").normalizeEmail().isEmail(),
    check("password", "Password with 5+ characters required")
      .isLength({ min: 5 })
      .custom((val, { req, loc, path }) => {
        if (val !== req.body.confirm_password)
          throw new Error("Password's don't match!");
        return value;
      }),
  ],
  (req, res) => {
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
      // return res.status(422).json(errors.array());
      const alert = errors.array();
      res.render("index", {
        alert,
      });
    }
  }
);

app.listen(PORT, () => console.log("Server started on port ", PORT));
