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