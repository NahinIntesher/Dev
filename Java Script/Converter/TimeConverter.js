mainButton.onclick = function () {
    let input = parseFloat(inputPlace.value);
    let ans;
    if(fromSelect.value == "NanoSecond") ans = input / 1e+9;
    else if(fromSelect.value == "MicroSecond") ans = input / 1e+6;
    else if(fromSelect.value == "MiliSecond") ans = input / 1000;
    else if(fromSelect.value == "Second") ans = input;
    else if(fromSelect.value == "Minute") ans = input * 60;
    else if(fromSelect.value == "Hour") ans = input * 3600;
    else if(fromSelect.value == "Day") ans = input * 86400;
    else if(fromSelect.value == "Week") ans = input * 604800;
    else if(fromSelect.value == "Month") ans = input * (604800 * 30 / 7);
    else if(fromSelect.value == "Year") ans = input * (604800 * 52.15);

    ans = Math.round(ans);

    if(toSelect.value == "NanoSecond") ans = ans * 1e+9;
    else if(toSelect.value == "MicroSecond") ans = ans * 1e+6;
    else if(toSelect.value == "MiliSecond") ans = ans * 1000;
    else if(toSelect.value == "Second") ans = ans;
    else if(toSelect.value == "Minute") ans = ans / 60;
    else if(toSelect.value == "Hour") ans = ans / 3600;
    else if(toSelect.value == "Day") ans = ans / 86400;
    else if(toSelect.value == "Week") ans = ans / 604800;
    else if(toSelect.value == "Month") ans = ans / (604800 * 30 / 7);
    else if(toSelect.value == "Year") ans = ans / (604800 * 52.15);
    
    ans = Math.round(ans);

    if(!isNaN(ans)) {
        outputText.innerHTML = ans;
        outputText.style.color = "Black";
    }
    else{
        outputText.innerHTML = "Please Write Any Number!";
        outputText.style.color = "red";
    }
}