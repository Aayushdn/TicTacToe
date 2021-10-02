console.log("running");

// Listening to the user clicks
const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#resetBtn");
const gameReset = document.querySelector("#gameReset");
const messageBox = document.querySelector("#mesResetBox");
const messageSpan = document.querySelector("#message");
const xturnIndicator = document.querySelector(".xTurn"); 
const oturnIndicator = document.querySelector(".oTurn"); 

resetBtn.addEventListener("click", resetBoard);
gameReset.addEventListener("click", resetBoard);


function resetBoard() {
    boxes.forEach((elem) => {
        elem.innerText = "";
    });
    messageBox.style.display = "none";
}
let turn = "O";


boxes.forEach(function (elem) {
    elem.addEventListener("click", function () {
        whenClicked(elem);
    });
});

function isBoxEmpty(boxElement) {
    if (boxElement.innerText === "") {
        return 1;
    }
    else {
        return 0;
    };
};

let winCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6]
];


function displayMessage(message){
    messageSpan.innerText = message
    messageBox.style.display = "flex";
}

function checkForWinStatus(turn) {
    winCondition.forEach((cond)=>{
        if (boxes[cond[0]].innerText == boxes[cond[1]].innerText && boxes[cond[0]].innerText == boxes[cond[2]].innerText && boxes[cond[0]].innerText == turn) {
            displayMessage(`${turn} has win`)
        }
        
    })
}

function isBoardFull(){
    let draw = 0;
    boxes.forEach((box) => {
        if (box.innerText !== ""){
            draw++;
            console.log(draw)
        }
    });
    if (draw === 9){
        displayMessage("Game Draw")
    }
};




function whenClicked(elem) {
    if (isBoxEmpty(elem)) {
        drawIt(elem, turn);
        isBoardFull();
        checkForWinStatus(turn);     
        
        if (turn == "O") {
            xturnIndicator.classList.add("presentTurn")
            oturnIndicator.classList.remove("presentTurn")
            turn = "X";
        }
        else {
            oturnIndicator.classList.add("presentTurn")
            xturnIndicator.classList.remove("presentTurn")
            turn = "O";
        };

    };

};

function drawIt(whichElement, turn) {
    whichElement.innerText = turn;
};
