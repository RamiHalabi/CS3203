/* 
CS3203
2-16-2023
Homework 3: GIT
*/

// Question 1
const computeSum = (x) =>{

  // calculate sum
  let sum = 0;
  for (let i = 0; i < x.length; i++) {
    sum += x[i];
  }
  return sum;
};

console.log(computeSum([1,2,3,4,5]));

