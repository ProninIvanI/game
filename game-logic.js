let move = 0;
let arrayOfMovies = [0,0,0,0,0,0,0,0,0]
let arrayOfWininigOptions = [0,1,2,3,4,5,6,7,8,0,3,6,1,4,7,2,5,8,0,4,8,2,4,6]
let winnigPlayerIndicator = 0
let arrayCombinationWinning = []

function movePlayer(id) {
    drawingLetter(id);
    lockingButtonAfterPressing(id)
    move += 1;
    arrayOfMovies[id] = move % 2 == 0 ? 2 : 1
    winnigPlayerIndicator = victoryCheck()
    if (winnigPlayerIndicator != 0) {
        visualVictory()
        victoryMessage(winnigPlayerIndicator)
    } else if (winnigPlayerIndicator == 0 && move == 9) {
        visualDraw()
        drawMessage()
    }
}

function victoryCheck() {
    for (let i = 0; i < arrayOfWininigOptions.length - 2; i+=3) {
        if (arrayOfMovies[arrayOfWininigOptions[i]] == arrayOfMovies[arrayOfWininigOptions[i+1]] && arrayOfMovies[arrayOfWininigOptions[i+2]] == arrayOfMovies[arrayOfWininigOptions[i+1]] && arrayOfMovies[arrayOfWininigOptions[i]] != 0 && arrayOfMovies[arrayOfWininigOptions[i + 1]] != 0 && arrayOfMovies[arrayOfWininigOptions[i + 2]] != 0) {
            arrayCombinationWinning.push(arrayOfWininigOptions[i]);
            arrayCombinationWinning.push(arrayOfWininigOptions[i + 1]);
            arrayCombinationWinning.push(arrayOfWininigOptions[i + 2]);
            return arrayOfMovies[arrayOfWininigOptions[i]];
        }
    }
    return 0
}

function visualDraw() {
    for (let i = 0; i < 9; i++) {
        document.getElementById("btn" + String(i)).style.background = "blue"
        
    }
}

function visualVictory() {
    for (let i = 0; i < arrayCombinationWinning.length; i++) {
        document.getElementById("btn" + String(arrayCombinationWinning[i])).style.background = "green";
    }
}

function victoryMessage(id) {
    return (id == 1) ? alert("Победил игрок 1") : alert("Победил игрок 2")
}

function drawMessage() {
    return alert("Ничья")
}


function lockingButtonAfterPressing(id) {
    document.getElementById("btn" + String(id)).disabled = "true";
}

function drawingLetter(id) {
    if (move % 2 == 0) {
        drawingCircle(id);
    } else {
        drawingCross(id);
    }
}

function drawingCircle(id) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');

    ctx.arc(25, 25, 10, 0, Math.PI * 2, true);
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawingCross(id) {
    let canvas = document.getElementById(id);
    let ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.moveTo(15, 15);
    ctx.lineTo(35,35)
    ctx.moveTo(15, 35);
    ctx.lineTo(35,15)
    ctx.lineWidth = 2;
    ctx.stroke();
}