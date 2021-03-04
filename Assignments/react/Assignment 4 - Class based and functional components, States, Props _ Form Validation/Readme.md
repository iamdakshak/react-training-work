# Assignment 4 - Class based and functional components, States, Props & Form Validation

## The challenge

This is a continuation of `Artwork Gallery` Project (Assignment 3). In this project, you will setup states, props and form validation.

## Task

1. Create a new branch named `Assignment4` and switch to that branch.
2. Previously in Assignment 3, you have created all the necessary components for all the pages and setup routes for them as well. You have also created content for `Homepage` and `Artwork Detail Page` which currently just displays static info regarding a demo artwork.
3. There is file named `data.js` which contains an array of all the artworks (objects) containing the image url, title, description, genre, price, etc. You will need to put this file inside the `src` folder and fetch the list in your Homepage using appropriate lifecycle methods. Create a separate component to display a card of each artwork and use appropriate array methods to display all the artworks on the homepage.
4. Now, whenever user clicks on any artwork from `Homepage`, you are going to pass that artwork's details through props to the `Artwork Detail Page` component. Accordingly your `Artwork Detail Page` should keep changing depending on which artwork the user clicks on.
5. In the `Artwork Detail Page`, there should be a button to add that artwork to cart. Whenever a user clicks on that button, that artwork should get added to the cart and a notification should be displayed stating `____ has been added to cart` where `_____` should be replaced by the title of the artwork. Your CSS knowledge and practice should come in handy for this task. User should also be able to delete any of the items from the cart of change the quantity of the products.
6. Cart page table should display the added artwork and it's details and total price should get calculated accordingly. For eg. if a user adds 2 items to the cart with prices Rs. 100 and Rs. 200 then it should correctly show the total as Rs. 300
7. When user clicks on checkout button from the cart page, he should get redirected to the checkout page where a 'Thank you' message should be displayed.
8. For login and registration pages, you have already created the forms. Now you are going to add validation to those forms. Proper error messages should be displayed if any of the fields are not valid. For example if a user enters 'sample@coditas` as email, this is not a valid email address. So, it should show a message below the email field stating the error.
9. Commit and push your code to github.

**Have fun building!** 🚀
