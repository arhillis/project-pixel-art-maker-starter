const canvas = document.getElementById("pixelCanvas");
const ctx = canvas.getContext("2d");

// Select color input => LATER

// Select size input => 
const rowsInput = document.getElementById("rows-input");
const colsInput = document.getElementById("cols-input");
const submitBtn = document.getElementById("submit-btn");

//Grab the dimensions of the canvas =>
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;



function makeGrid(numRows, numCols, color) {
    // Your code goes here!
    ctx.fillStyle = "white";//To clear the canvas
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = color || "black"; //I added the last part just in case color is undefined
    let width = canvasWidth / numCols;
    let height = canvasHeight / numRows;

    for (let i = width; i < canvasWidth; i += width) {
        drawLine(i, 0, i, canvasHeight);
    }

    for (let i = height; i < canvasHeight; i += height) {
        drawLine(0, i, canvasWidth, i);
    }

    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.restore();
    }
    

}

function init(){

    let numRows = 5;
    let numCols = 5;

    makeGrid(numRows, numCols, "black");

    // When size is submitted by the user, call makeGrid()
    submitBtn.onclick = function(event){
        event.preventDefault();

        numRows = Number(rowsInput.value);
        numCols = Number(colsInput.value);
        makeGrid(numRows, numCols, "black");
    };

    /*
    let width = canvasWidth / numRows;
    let height = canvasHeight / numCols;
    let x = 0;
    let y = 0;

    ctx.fillStyle = "red";
    drawSquare(0, 0, 79, 79);//400 divided by 5 is 80, minus 1 is 79

    ctx.fillRect(161, 81, 78, 78);
    */

    drawSquare(0, 0, "red");
    drawSquare(161, 81, "red");

    function drawSquare(x, y, color){
        ctx.fillStyle = color || "white";
    
        let squareWidth = canvasWidth / numCols;
        let squareHeight = canvasHeight / numRows; 
        let onVerticalAxis = x === 0 || x === canvasWidth - squareWidth + 1;
        let onHorizonalAxis = y === 0 || y === canvasHeight - squareHeight + 2;
        squareWidth -= (onVerticalAxis) ? 1 : 2;
        squareHeight -= (onHorizonalAxis) ? 1 : 2;
    
        ctx.fillRect(x, y, squareWidth, squareHeight);
    }
}

window.onload = init();