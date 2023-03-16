# Purchase Points Report

---

## Important Files

* src/
  * api/
    * [api.js](./api/api.js)
    * [orders.js](./api/api.js)
  * components/
    * [Customer.js](./components/Customer.js)
    * [Items.js](./components/Items.js)
    * [RewardsPointsReport.js](./components/RewardsPointsReport.js)
  * utils/
    * [calculatePoints.js](./utils/calculatePOints.js)
    * [customerTotals.js](./customerTotals.js)
    * [formDate.js](formatDate.js)

--- 

## Important Decisions

- I prefer to use a reuseable component library when developing with React. I decided to use MUI to mock what it would be like to use an existing component library.
- For mocking the api call I decided to use a simple `new Promise` so that I can satisfy the asynchronous AC on the ticket.
- To simulate a larger set of data spanning a longer time than the 3 months I created a file that acts as a request from a GET request spanning back a year. (93 generated entries)
- `customerTotals.js` is O(n) time complexity. I am using this utility to create the final Array that will be used to render only the correct data.
- `calculatePoints.js` is the method that is being used to actually calculate points based on a specific price point




--- 
## Acceptance Criteria

A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.


A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.

(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).


Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.


  - Use React JS (do not use TypeScript)
  - Simulate an asynchronous API call to fetch data
  - Make up a data set to best demonstrate your solution
  - Check solution into GitHub# Charter
