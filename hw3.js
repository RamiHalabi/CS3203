/* 
CS3203
2-16-2023
Homework 3: GIT
*/

// Question 1
const computeSum = (x) => {
  // calculate sum
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
};

// Question 2
const computeProduct = (x) => {
  // calculate product
  let product = 1;
  for (let i = 0; i < x.length; i++) {
    product *= x[i];
  }
  return x.length < 1 ? 0 : x.length == 1 ? x[0] : product;
};


// assist for user input
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Question 3
const main = () => {
  readline.question("Enter numbers separated by spaces: ", function (input) {
    const list = input.trim().split(' ').map(Number);
    console.log(`the sum of [${list}] is `+ computeSum(list));
    console.log(`the product of [${list}] is `+ computeProduct(list));
    readline.close();
  });
};

main();