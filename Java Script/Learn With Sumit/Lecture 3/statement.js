// let x = 10;
// let y = 3;
// // console.log(x**y);
// document.getElementById("area").innerHTML = x**y;

// let m;

// let myObject = {x: 15, y: 14};
// console.log(typeof myObject);
// console.log(m);

var c = 5;
console.log(c);
if(c == 5){
    c = 45645; // c have changed 
}
{
    // c = 1564; // c have changed
}
function myFunction () {
    var c = 234; // c will not change outside this function
    console.log(c);
}
myFunction();
console.log(c);