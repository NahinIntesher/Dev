const car = { // In term of object we should use const
    firstName : "Ford",
    lastName : "Mastang",
    model: 500,
    weight: "850 kg",
    color: "white",
    start: function(){
        console.log("Car has started");
    },
    drive: function(){
        console.log("Car is being driving");
    },
    fullName: function(){
        console.log(this.firstName + " " + this.lastName);
    }
}

console.log(car["firstName"]);
console.log(car.color);

car.fullName();
