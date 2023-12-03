mainButton.onclick = function () {
    let input = parseFloat(inputPlace.value);
    let ans;
    if(fromSelect.value == "KiloMeter") ans = input * 1000;
    else if(fromSelect.value == "Meter") ans = input;
    else if(fromSelect.value == "CentiMeter") ans = input / 100;
    else if(fromSelect.value == "Mile") ans = input * 1609;
    else if(fromSelect.value == "Inch") ans = input / 39.37;
    else if(fromSelect.value == "Yard") ans = input / 1.094;
    else if(fromSelect.value == "Foot") ans = input / 3.281;

    if(toSelect.value == "KiloMeter") ans = ans / 1000;
    else if(toSelect.value == "Meter") ans = ans;
    else if(toSelect.value == "CentiMeter") ans = ans * 100;
    else if(toSelect.value == "Mile") ans = ans / 1609;
    else if(toSelect.value == "Inch") ans = ans * 39.37;
    else if(toSelect.value == "Yard") ans = ans * 1.094;
    else if(toSelect.value == "Foot") ans = ans * 3.281;

    if(!isNaN(ans)) {
        outputText.innerHTML = ans;
        outputText.style.color = "Black";
    }
    else{
        outputText.innerHTML = "Please Write Any Number!";
        outputText.style.color = "red";
    }
}