const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// 1. Filter the list of inventors for those who were born in the 1500's
inventors.filter(val => val.year >= 1500 && val.year < 1600)

// 2. Give us an array of the inventors first and last names
inventors.map(val => {
  let arr = val.first + ' ' + val.last;
  return arr;
})

// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((x, y) => (x.year < y.year) ? 1
               : (y.year < x.year) ? -1 : 0)

// 4. How many years did all the inventors live all together?
inventors.map(val => {
  let arr = val.passed - val.year;
  return arr;
}).reduce((a,b) => a+b)

// 5. Sort the inventors by years lived
inventors.sort((a, b) => (a.passed - a.year) - (b.passed - b.year))

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
let titles = document.querySelector('.mw-category')
let links = Array.from(titles.querySelectorAll('a'))
let de = links.map(link => link.outerText)
              .filter(street => street.includes('de'))
console.log(de)

// 7. sort Exercise
// Sort the people alphabetically by last name
people.sort((a, b) => {
  let firstName = a.split(' ')
  let secondName = b.split(' ')
  let firstLastName = firstName[firstName.length - 1]
  let secondLastName = secondName[secondName.length - 1]

  if(firstLastName > secondLastName) return 1;
  if(firstLastName < secondLastName) return -1;
  return 0;
})

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    /* Solution 1 */    
    let count = {}
    data.forEach(val => {
      count[val] = (count[val] || 0) + 1;
    })
    console.log(count)

    /* Solution 2 */
    let counts = data.reduce((acc, val) => ({
      ...acc,
      [val] : (acc[val] || 0) + 1
    }), {}) 
    console.log(counts)



// data for next few questions
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// 9. Some and Every Checks
// Array.prototype.some() // is at least one person 19?
const isOfAge = people.some(person => {
  let age = new Date().getFullYear() - person.year;
  return age >= 19;
})
console.log(isOfAge)

// 10. Array.prototype.every() // is everyone 19?
const isMoreThan18 = people.every(person => {
  let age = new Date().getFullYear() - person.year;
  return age >= 19;
})
console.log(isMoreThan18)

// 11. Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find(item => item.id == 823423)
console.log(findComment)

// 12. Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const commentIndex = comments.findIndex(item = > item.id == 823423)
comments.splice(commentIndex, 1)
console.log(comments)

//13. Async await
async function testFunc() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise; // wait until the promise resolves (*)

  alert(result); // "done!"
}

testFunc();

// The next challenge is based on NPM and Packages 
/* The goal is to make sure you are able to
install NPM packages. The package you
would be using for this challenge is “ms” .. Check it out on NPM (https://www.npmjs.com/package/ms). It's a small
package which converts time in words to milliseconds and vice versa.
Take time as as input in words and convert to milliseconds.
(for example 15 minutes, 10 seconds, 2 hours, 1 day)
Don't worry, ms has just two methods. Visit the documentation and you will
be good to go.
*/
// 1. npm i ms;
//2. Import and use ms()
var ms = require('ms')
let convert = ms('2 days');
let convert1 = ms(85000)
console.log(convert, convert1)

