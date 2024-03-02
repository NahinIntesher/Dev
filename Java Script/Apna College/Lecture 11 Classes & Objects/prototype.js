let arr = ['apple', 'banana', 'orange'];
arr.push('lichi');
/* 
Though arr is an object in javascript and we never define any push function in arr but 
there are many fuction those have been created by default. They are called prototype. 
Like -> push, pop, length, toString, sort, reverse, find, indexOf, slice etc...
So in short JS object has a special property called prototype....
*/


/*
We can make our own prototype -> actually if we want to use the function
calcTax1() of employee object in our object karanArjun then we use __proto__
this is called prototype. Using "__proto__" we can use function of one object
in another object. 
*/
const employee = {
  calcTax1() {
    console.log('Tax rate is 10%');
  },
  calcTax2: function() {
    console.log('Tax rate is 5%');
  }
}
const karanArjun = {
  salary: 50000,
  calcTax1() {
    console.log('Tax rate is 20%');
  }
}
const karanArjun2 = {
  salary: 60000,
}
// Like that -> 
karanArjun.__proto__ = employee;
karanArjun2.__proto__ = karanArjun;

karanArjun2.calcTax1(); // This will print 20% function
karanArjun.calcTax1(); // This will print 20% function

karanArjun2.calcTax2(); // This will print 5% function
karanArjun.calcTax2(); // This will also print 5% function




