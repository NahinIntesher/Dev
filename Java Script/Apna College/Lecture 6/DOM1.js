var isClick = false;
myButton.onclick = function () {
    if(isClick == false){
        main.style.backgroundColor = 'green';   
        isClick = true;
    } 
    else if(isClick == true){
        main.style.backgroundColor = 'blueviolet';
        isClick = false;
    }
}

var isClick2 = false;
const carry = document.getElementById("myName").innerHTML;
myButton2.onclick = function () {
    let str = "I am very happy to learn JS";
    if(isClick2 == false){
        myName.innerHTML = str;   
        isClick2 = true;
    } 
    else if(isClick2 == true){
        myName.innerHTML = carry;  
        isClick2 = false;
    }
}
