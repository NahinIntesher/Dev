let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-button");
let newGameBtn = document.querySelector("#new-button");
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turn0 = true;
let totalMoves = 9;
let winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0){
            box.style.color = "#3e4bb0";
            box.innerText = "O";
            turn0 = false;
            totalMoves--;
        }
        else if(!turn0){
            box.innerText = "X";
            turn0 = true;
            totalMoves--;
        }
        box.disabled = true;

        checkWinner();
    });
});

resetBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.color = "#b0413e";
        totalMoves = 9;
        enableBoxes();
    });
    msgContainer.classList.add("hide");
    turn0 = true;
});

newGameBtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.style.color = "#b0413e";
        totalMoves = 9;
        enableBoxes();
    });
    msgContainer.classList.add("hide");
    turn0 = true;
});

disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
    }
}

showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ' ${winner} '`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

checkWinner = () => {
    for(pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                showWinner(pos1);
            }
            else if(totalMoves == 0){
                msg.innerText = "Game is Draw";
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
            
        }
    }
};