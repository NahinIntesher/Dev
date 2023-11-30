const arrowSum = (a, b) => {
    return a + b;
}
const arrowMultiply = (a, b) => {
    return a * b;
}

// console.log(arrowSum(3, 5));
// console.log(arrowMultiply(3, 5));
// console.log("HELLO");

arr = [1, 20, 3, 4, 5];
// var j = arr[0];

// arr.forEach((val) =>{
//     console.log(`\n-> ${j}.Value before: ${val}`);
//     for(let i = 1; i <= 3; i++){
//         val = val + i;
//     }
//     console.log(`-> Value after: ${val}\n`);
//     j++;
// });

// const calcSquare = (val) => {
//     console.log(`\nSquare of ${val} * ${val}: ${val * val}`);
// }



// arr.forEach(calcSquare);
const maxFinder = arr.reduce((max, curr) =>{
    return (max = max > curr ? max : curr);
});
console.log(maxFinder);