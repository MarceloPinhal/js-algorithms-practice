const fizzbuzz = function (num) {
  if (num === 0) {
    return 0;
  }

  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }

  if (num % 3 === 0) {
    return "fizz";
  }

  if (num % 5 === 0) {
    return "buzz";
  }

  return num;
};

const print = function (num) {
  for (let i = 0; i <= num; i++) {
    console.log(`${i}: ${fizzbuzz(i)}`);
  }
};

print(20);

// this algo doesn't work because "console.log()" doesn't stop the code as the return does in the function above

// const findMultiples = (num)=>{

// for (let i = 0; i <= num; i++) {

//     if (i % 3 === 0 && i % 5 === 0) {
//        console.log (`${i} : fizzbuzz`);
//       }

//       if (i % 3 === 0) {
//        console.log (`${i} : buzz`);
//       }

//       if (i % 5 === 0) {
//         console.log (`${i} : fizz`);
//       }

//     console.log (`${i}:${i}`)
// }

// }

// console.log(findMultiples(5))
