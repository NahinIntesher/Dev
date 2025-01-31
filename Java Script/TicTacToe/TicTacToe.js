document.addEventListener("DOMContentLoaded", () => {
    const modeSelection = document.querySelector(".mode-selection");
    const gameContainer = document.querySelector(".game-container");
    const multiplayerBtn = document.getElementById("multiplayer-btn");
    const aiBtn = document.getElementById("ai-btn");
    const boxes = document.querySelectorAll(".box");
    const resetBtn = document.querySelector("#reset-button");
    const homeBtn = document.querySelector("#home-button");
    const newGameBtn = document.querySelector("#new-button");
    const homeMsgBtn = document.querySelector("#home-msg-button");
    const msgContainer = document.querySelector(".msg-container");
    const msg = document.querySelector("#msg");
    const gameModeTitle = document.getElementById("game-mode-title");
  
    let gameMode = "";
    let currentPlayer = "O";
    let totalMoves = 9;
    let gameActive = true;
  
    const winPatterns = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [3, 4, 5],
      [6, 7, 8],
    ];
  
    function startGame(mode) {
      gameMode = mode;
      modeSelection.style.display = "none";
      gameContainer.style.display = "block";
      gameModeTitle.textContent =
        mode === "multiplayer" ? "Multiplayer Duel" : "Unbeatable AI Challenge";
      resetGame();
    }
  
    function returnToHome() {
      modeSelection.style.display = "block";
      gameContainer.style.display = "none";
      msgContainer.style.display = "none";
      resetGame();
    }
  
    function resetGame() {
      boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        box.style.color = "#181A2F";
      });
      currentPlayer = "O";
      totalMoves = 9;
      gameActive = true;
      msgContainer.style.display = "none";
    }
  
    function handleBoxClick(box) {
      if (!gameActive || box.innerText !== "") return;
  
      if (gameMode === "multiplayer") {
        playMultiplayer(box);
      } else {
        playAgainstAI(box);
      }
    }
  
    function playMultiplayer(box) {
      box.innerText = currentPlayer;
      box.style.color = currentPlayer === "O" ? "#37415C" : "#D4182D";
      box.disabled = true;
  
      if (checkWinner(currentPlayer)) return;
  
      currentPlayer = currentPlayer === "O" ? "X" : "O";
      totalMoves--;
    }
  
    function playAgainstAI(box) {
      // Player's move
      box.innerText = "O";
      box.style.color = "#37415C";
      box.disabled = true;
  
      if (checkWinner("O")) return;
  
      // AI's move
      setTimeout(() => {
        const aiMove = getBestMove();
        boxes[aiMove].innerText = "X";
        boxes[aiMove].style.color = "#D4182D";
        boxes[aiMove].disabled = true;
  
        checkWinner("X");
        totalMoves--;
      }, 500);
      
      totalMoves--;
    }
  
    function getBestMove() {
      let bestScore = -Infinity;
      let move;
      
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].innerText === "") {
          boxes[i].innerText = "X";
          let score = minimax(boxes, 0, false);
          boxes[i].innerText = "";
          
          if (score > bestScore) {
            bestScore = score;
            move = i;
          }
        }
      }
      
      return move;
    }
  
    function minimax(board, depth, isMaximizing) {
      const result = checkWinnerMinimax();
      
      if (result !== null) {
        return result;
      }
      
      if (isMaximizing) {
        let bestScore = -Infinity;
        for (let i = 0; i < board.length; i++) {
          if (board[i].innerText === "") {
            board[i].innerText = "X";
            let score = minimax(board, depth + 1, false);
            board[i].innerText = "";
            bestScore = Math.max(score, bestScore);
          }
        }
        return bestScore;
      } else {
        let bestScore = Infinity;
        for (let i = 0; i < board.length; i++) {
          if (board[i].innerText === "") {
            board[i].innerText = "O";
            let score = minimax(board, depth + 1, true);
            board[i].innerText = "";
            bestScore = Math.min(score, bestScore);
          }
        }
        return bestScore;
      }
    }
  
    function checkWinnerMinimax() {
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        const boxValues = [
          boxes[a].innerText,
          boxes[b].innerText,
          boxes[c].innerText,
        ];
  
        if (boxValues.every((val) => val === "X")) return 10;
        if (boxValues.every((val) => val === "O")) return -10;
      }
  
      const isBoardFull = [...boxes].every((box) => box.innerText !== "");
      return isBoardFull ? 0 : null;
    }
  
    function checkWinner(player) {
      for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
          boxes[a].innerText === player &&
          boxes[b].innerText === player &&
          boxes[c].innerText === player
        ) {
          showWinner(player);
          return true;
        }
      }
  
      if (totalMoves === 0) {
        showDraw();
        return true;
      }
  
      return false;
    }
  
    function showWinner(winner) {
      msg.innerText = `${winner === "O" ? "Player" : "AI"} Wins!`;
      msgContainer.style.display = "flex";
      gameActive = false;
    }
  
    function showDraw() {
      msg.innerText = "It's a Draw!";
      msgContainer.style.display = "flex";
      gameActive = false;
    }
  
    multiplayerBtn.addEventListener("click", () => startGame("multiplayer"));
    aiBtn.addEventListener("click", () => startGame("ai"));
    resetBtn.addEventListener("click", resetGame);
    homeBtn.addEventListener("click", returnToHome);
    newGameBtn.addEventListener("click", resetGame);
    homeMsgBtn.addEventListener("click", returnToHome);
    boxes.forEach((box) =>
      box.addEventListener("click", () => handleBoxClick(box))
    );
  });