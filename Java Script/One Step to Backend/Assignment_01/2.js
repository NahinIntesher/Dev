let str = "112230169"

const num = Number(str);

check(123456789);

function check(value) {
    if (value === null || value === undefined) {
        return { statusMsg: "There is no value", convertedNumber: null };
    }
    const number = Number(value);
    if (isNaN(number)) {
        return { statusMsg: "Not a valid number", convertedNumber: null };
    }
    while(value > 0){
        const temp = value % 10;
        console.log(fib(temp));
        value = value / 10;
    }
}

function fib(n) {    
    if(n == 1) return 0;
    else if(n == 2) return 1; 
    let x = 0;
    let y = 1;
    for (let i = 3; i <= n; i++) {
        let z = x + y;
        x = y;
        y = z;
    }
    return y;
}
