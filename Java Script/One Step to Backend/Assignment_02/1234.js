const birth = Symbol("Personal Info");
const person = {
  name: {
    firstName: "Sakib",
    lastName: "Al Hasan",
  },
  [birth]: {
    age: 37,
    birthPlace: {
      zill: "Magura",
      division: "Khulna",
      country: "Bangladesh",
    },
    birthYear: "",
  },
  education: {
    depertment: "BBA",
    University: {
      name: "AIUB",
      location: {
        road: "409/1",
        place: "Kuril",
      },
    },
  },
  profession: ["Politician", "cricketer"],
  isAllrounder: true,
};
// console.log(`${person.name.firstName}    faisal ahmed ${person.name.lastName}`);
// console.log(person["name"]["firstName"]);
// const personFirstName = person.name.firstName;
// const { firstName : personFirstName, lastName : personLastName } = person.name;
// console.log(firstName, lastName);
// arr = [24, 54 ,92];
// let arr = [];
// arr.push(person);
// arr.push(person);
// console.log(arr);
// console.log(person[birth].birthYear);
// const year = person[birth].birthYear;
// const birthYear = Number(year);
// console.log(typeof birthYear);
function checkNumber(value) {
  if (value === null || value === undefined || value === "") {
    return { isValid: false, number: null };
  }
  const year = Number(value);
  if (isNaN(year)) {
    return { isValid: false, number: null };
  } else {
    return { isValid: true, number: year };
  }
}

const birthY = checkNumber(person[birth].birthYear);
console.log(birthY);
if (birthY.number === null) {
} else {
}
