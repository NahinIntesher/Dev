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

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   sub: function (a, b) {
//     return a - b;
//   },
// };

// console.log(calculator.add(2, 3));
// console.log(calculator.sub(2, 3));

let str = "0112230169";
function check(value){
  if(value === null || value === undefined){
      return{statusMsg: "There is no value", convertedNumber: null};
  }
  const number = Number(value);
  if (isNaN(number)){
    return{statusMsg: "Not a valid number", convertedNumber: null};
  }

}