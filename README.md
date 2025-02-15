# Incorrect use of $inc operator in MongoDB

This repository demonstrates an uncommon bug in MongoDB related to the incorrect use of the `$inc` operator. The `$inc` operator is used to increment a numeric field in a document. However, it is often misused, leading to unexpected behavior.

## Bug Description

The `$inc` operator in MongoDB can only be used once per update operation. If you try to use it multiple times, only the last increment will be applied. This can lead to unexpected results.

## Bug Reproduction

The `bug.js` file demonstrates the incorrect usage of `$inc` operator. Run the code to see the unexpected behavior. You'll notice that only the last increment operation has been performed.

## Bug Solution

The `bugSolution.js` file demonstrates the correct usage of `$inc`.  To update multiple fields use multiple update operations or the $set operator.

## How to run

1. Make sure you have Node.js and npm installed.
2. Clone this repository.
3. Run `npm install` to install necessary dependencies (if any).
4. Run `node bug.js` to reproduce the bug.
5. Run `node bugSolution.js` to see the correct implementation.