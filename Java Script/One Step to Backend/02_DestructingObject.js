const person = {
    namee: "nahin",
    age: 22,
};

// Access the variables of the person

/* Begginer */ 
// const namee = person.namee;
// const age = person.age;

/* Intermediate */ 
// const {namee, age} = person;


/* Advance*/
const {namee: personName, age: personAge} = person;

console.log(personName);
console.log(personAge);