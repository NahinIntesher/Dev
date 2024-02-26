// let marks = [34,78,90,92,100,44,96];

// const toppers = marks.filter((val) =>{
//     return val >= 90;
// });

// console.log(toppers);

// let n = prompt("Enter Array size: ");
let arr = [];
for (let i = 0; i < 5; i++) {
    arr[i] = i + 1;
}

let sum = arr.reduce((sum, val) =>{
    return sum + val;
});
let product = arr.reduce((sum, val) =>{
    return sum * val;
});
console.log(sum);
console.log(product);
// console.log(`Sum: ${sum}`);
// console.log(`Product: ${product}`);