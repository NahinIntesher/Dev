// const user = {
//     name: "Nahin Intesher",
//     age: 22,
//     greeting: function(){
//         console.log(`Hi ${this.name}`);
//     }
// }

// user.greeting();
// console.log(this); // print only curly braces

// function hello(){
//     console.log(this); // does not print only curly braces. Print a big object
// }

// func = () =>{
//     console.log(this); // But arrow function will also print only curly braces.
// }



/* 1st wqy and begginer way */
// const hello = function(namee){
//     console.log(`Hi ${namee}`);
// }

/* 2nd way and intermediate way */
// const hello = function(namee){
//     console.log(`Hi ${namee}`);
// }

/* 3rd way and advance way */
// const hello = (namee) =>{
//     console.log(`Hi ${namee}`);
// }

// hello("Nahin");


/* Return statement can be written as below */
// const fun1 = (value) => {
//     return value + 3;
// }  

/* Special: One line Return statement can also be written as below */
// const fun1 = (value) => value + 3; 

arrowFunc = () => {
  console.log(this); // But arrow function will also print only curly braces.
}
arrowFunc();
