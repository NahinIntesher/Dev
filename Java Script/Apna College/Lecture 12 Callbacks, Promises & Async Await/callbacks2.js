// call backs in syncronusly:
// function sum(a, b) {
    // console.log(`Sum is: ${a + b}`);
// }
// function calculator(a, b, sumCallBack) {
//     sumCallBack(a, b);
// }  
// calculator(1, 2, sum);
  

// call backs in asyncronusly:
// setTimeout(sum(1,2), 2000);



var i = 1;
function getData(dataId, getNextData) {
    setTimeout(() => { // 2s
        console.log(`Data ${i++}: ${dataId}`);
        if(getNextData){
            getNextData();
        }
    }, 2000);
}

console.log("Getting data 1...");
getData(14156, () => {
    console.log("Getting data 2...");
    getData(24685, () => {
        console.log("Getting data 3...");
        getData(37486, () => {
            console.log("Getting data 4...");
            getData(44685);
        });
    });
});