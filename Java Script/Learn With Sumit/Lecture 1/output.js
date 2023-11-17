// Old Javascript
document.getElementById("sum").innerHTML += 5 + 6;

// New Javascipt
var isClick = false;
nahin.onclick = function () {
    if(isClick == false){
        sum.style.fontSize = '55px';
        isClick = true;
    } 
    else if(isClick == true){
        sum.style.fontSize = '20px';
        isClick = false;
    }
}
