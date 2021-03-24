# Assignment 3 - Sever basics, HTTP methods and middlewares

## The challenge

In this assignment, you will create a bsic Express server, work with static files and HTTP methods.

## Task

1. Create a basic express server and display an image of your choice on the homepage using static files.
2. Show `Hello ${name}` message on path `/hello/${name}` using appropriate HTTP method where name should get replaced by your name. You need to pass your name as a parameter to the path here.
3. Create a middleware function to log the request where you are console logging the current date and it is sending `Request logged` message as a response to `/request` path
4. Create an error on `/error` path and pass it to the next function. Depending on the type of error message you are showing, use proper error status codes to show the error.
5. Create a basic form on the path `/form` and add a post request to this form. This is a register form which should have name, email, password and confirm password fields. You can use any view engine for this. In the post method, add validation to the form. Validation criteria is given below:
   a. Email should be valid email
   b. Password and confirm password should match
   c. Password's minimun length should be greater than 5

**Have fun building!** 🚀
