function sleep(name){
    console.log(name + " is sleeping.");
}

function myFunction(a, b){
    console.log("Hello");
    // return undefined [as default]
}

let name = "Nahin";
sleep(name);

let x = myFunction(6, 7);
console.log(x); // x = undefined




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

/* var variables gulo function e ulta palta korle change baire hoyna  
but condition, loop, block e ulta palta korle change */