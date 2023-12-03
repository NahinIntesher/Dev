mainButton.onclick = function () {
    let input = parseFloat(inputPlace.value);
    let ans;
    if(fromSelect.value == "Celsius") ans = input;
    else if(fromSelect.value == "Fahrenheit") ans = (5 * input - 160) / 9;
    else if(fromSelect.value == "Kelvin") ans = input - 273;

    if(toSelect.value == "Celsius") ans = ans;
    else if(toSelect.value == "Fahrenheit") ans = (9 * ans / 5) + 32;
    else if(toSelect.value == "Kelvin") ans = ans + 273;

    if(!isNaN(ans)) {
        outputText.innerHTML = ans;
        outputText.style.color = "Black";
    }
    else{
        outputText.innerHTML = "Please Write Any Number!";
        outputText.style.color = "red";
    }
}