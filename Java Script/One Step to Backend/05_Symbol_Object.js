// console.log("hello" === "hello");

// const { countBy } = require("lodash");

// const str1 = "hello";
// const str2 = "hello";

// console.log(str1 === str2);

// const sym1 = Symbol("top secret");
// const sym2 = Symbol("top secret");

// console.log(sym1 === sym2);

// const sym1 = Symbol.for("top");
// const sym2 = Symbol.for("top");

// console.log(sym1 === sym2);

// const WIN = Symbol("WINDOW");
// const AISLE = Symbol("AISLE");
// const MID = Symbol("MIDDLE");

// function reserveSeat(seatType) {
//   switch (seatType) {
//     case WIN:
//       return console.log("you have a window seat");
//     case AISLE:
//       return console.log("you have a aisle seat");
//     case MID:
//       return console.log("you have a MIDDLE seat");
//     default:
//       return console.log("invalid seat option");
//   }
// }

// reserveSeat(crew);

//symbol
// const privateInfo = Symbol("s1");

// const user = {
//   name: "rohit",
//   age: 21,
//   address: "matuail",
//   country: "bd",
//   [privateInfo]: "slkfjlaskdjflsajfk",
// };

// console.log(user["name"]);
// console.log(user.name);

// console.log(user[privateInfo]);




// const sum = Symbol();
// const sub = Symbol();


// const calculator = {
//     [sum]: function(a, b){
//         return a + b;
//     },
//     [sub]: function(a, b){
//         return a - b;
//     },
// }
// // Normal symbol access
// console.log(calculator[sum](2, 3));
// console.log(calculator[sub](2, 3));



const calculator = {
    [Symbol.for("sum")]: function(a, b){
        return a + b;
    },
    [Symbol.for("sub")]: function(a, b){
        return a - b;
    },
}

// Symbol for property access
console.log(calculator[Symbol.for("sum")](10, 3));
console.log(calculator[Symbol.for("sub")](10, 3));