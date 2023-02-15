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

console.log(computeSum([1, 2, 3, 4, 5]));

// Question 2
const computeProduct = (x) => {
  // base case
  if (x.length < 1) {
    // length is 0
    return 0;
  } else if (x.length == 1) {
    // length is 1
    return x[0];
  }

  // calculate product
  let product = 1;
  for (let i = 0; i < x.length; i++) {
    product *= x[i];
  }
  return product;
};

console.log(computeProduct([1, 2, 3, 4, 5]));
