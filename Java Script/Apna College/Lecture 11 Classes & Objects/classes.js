class ToyotaCar {
  constructor() {
    console.log("Creating new Object")
  }

  start() {
    console.log("Car is starting")
  }
  stop() {
    console.log("Car is stoping")
  }

  setBrand(brand) {
    this.brand = brand;
  }

}

let car1 = new ToyotaCar();
car1.start();
car1.setBrand("fortuner");

console.log(`Brand of the car is: ${car1.brand}`);
