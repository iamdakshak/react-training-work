// Create a database named `practice`
use practice

/* Create a table in that database named `employee` which has 
attributes id(primary key), first_name, last_name, age, city, 
designation and give appropriate data types. */
db.createCollection('employee');
db.employee.insert({
    id: 1,
    first_name: 'Clark',
    last_name: 'Kent',
    age: 28,
    city: 'Metropolis',
    designation: 'Journalist'
})

// Now, add a new column named `contact_no` in the table you just created.
db.employee.update({ id: 1 }, { $set: { contact_no: 9876543210 } })

/* The next few questions are based on `data.png`.*/
use data_test
db.createCollection('sales')
db.sales.insertMany([
    {
        salesman_id: 5001,
        name: 'James Hoog',
        city: 'New York',
        commission: 0.15
    },
    {
        salesman_id: 5002,
        name: 'Nail Knite',
        city: 'Paris',
        commission: 0.13
    },
    {
        salesman_id: 5005,
        name: 'Pit Alex',
        city: 'London',
        commission: 0.11
    },
    {
        salesman_id: 5006,
        name: 'Mc Lyon',
        city: 'Paris',
        commission: 0.14
    },
    {
        salesman_id: 5007,
        name: 'Paul Adam',
        city: 'Rome',
        commission: 0.13
    },
    {
        salesman_id: 5003,
        name: 'Lauson Hen',
        city: 'San Jose',
        commission: 0.12
    }
])

// Count the number of distinct cities present in the table. 
db.sales.distinct('city')
// Find all `salesman_id`s whose commission is greater than 0.11 
db.sales.find({ commission: { $gt: 0.11 } })
//Find the total commissions of all salesmen.
db.sales.aggregate([
    {
        $group: { _id: 1, TotalCommission: { $sum: '$commission' } }
    }
])
// Find the name of the salesman having the second highest commission.
db.sales.find().sort({ 'commission': -1 }).skip(1).limit(1)