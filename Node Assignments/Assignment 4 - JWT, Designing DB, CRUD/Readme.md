# Assignment 4 - JWT, Designing Database, CRUD

## The challenge

In this assignment, you will design a database for your `Artwork Gallery` project.

## Task

1. Create a server and connect it to mongodb.
2. Design database for your project, create `Models` and `Routes` necessary for executing all the requests. Follow the proper project structure.
3. Routes should be created for following requests:
   a. Getting all artworks
   b. Getting a specific artwork detail by `_id`
   c. Login
   d. Register
   e. Adding an item to cart
   f. Deleting an item from cart
   g. Changing quantity of an item in the cart
   h. Checkout
4. If you think, any more routes are necessary then feel free to create them.
5. User has to be logged in to be able to checkout. So add a middleware which checks if a token is added to headers or not. If token is added then only user will be able to checkout otherwise throw an error.
   **Have fun building!** 🚀
