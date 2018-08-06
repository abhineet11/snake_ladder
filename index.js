window.rollDice = () => {
    const max = 6;
    const roll = Math.ceil(Math.random()*6);
    console.log(roll)
    let currentPlayer = players[currentPlayerTurn];
    currentPlayer.position += roll;
    renderBoard();
    console.log(currentPlayer);
}

const players = [{
    name: "abhineet",
    position: 0,
    color: 'gold'
}]

let currentPlayerTurn = 0

const width = 9;
const height = 9;
const board = [];
let position = 0;
let blackSquare = false;

for (var y = height; y >= 0; y--) {
    let row = [];
    board.push(row);
    for(var x = 0; x < width; x++) {
        row.push({x, y, occupied : null, position, color: blackSquare?"steelblue":"grey"});
        blackSquare = !blackSquare;
        position++;
    }
}

const boardSizeConst = 50;
const renderBoard = () => {
    let boardHtml = '';
    board.forEach(row => {
        row.forEach(square => {
            boardHtml += `<div class="square" style="top: ${ square.y*boardSizeConst};left: ${ square.x*boardSizeConst} ;background-color: ${square.color}"></div>`
        })
   })
   players.forEach(player =>{
        board.forEach(row => {
            row.forEach(square => {
                if(square.position == player.position){
                    console.log("player is on this square:", square)
                  boardHtml += `<div class="player" style="top: ${ square.y * boardSizeConst + 10 };left: ${ square.x * boardSizeConst + 10 }; background-color: ${ player.color }" ></div>`   
                }
            })
        })
    })
    document.getElementById('board').innerHTML = boardHtml;
}

renderBoard();
console.log(board)