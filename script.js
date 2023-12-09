//Container for Div Squares//
const container = document.getElementById("container");
let title = document.getElementById("first");
buttoncontain = document.getElementById("btncontainer");

let rainbowColorIsOn = false;


//Creates 16x16 Div Grid Sqaures//
function addSquares(squareNum) {
    const squareSize = 500/squareNum; //Calculates size of each square
    const totalSquares = squareNum*squareNum;
    for (i = 0; i < totalSquares; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-item");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

addSquares(16);

//Choose Number of Squares//
let numberButton = document.getElementById("sqrnumber");
numberButton.addEventListener("click", () => {
    let enterNumber;
    while (isNaN(enterNumber) || enterNumber > 100 || enterNumber < 0) {
        enterNumber = Number(window.prompt("Choose A Number between 0 -100"));
    }
        //Clear Squares
        container.innerHTML = "";
        addSquares(enterNumber);
        changeSquareColor();
        
    });

    function addMouseoverToGrids() {
        const grids = document.querySelectorAll('.grid-item');
        if (rainbowColorIsOn == true) {
            grids.forEach(element=> element.addEventListener('mouseover', changePencilColor(randomColor())));
        } else {
            grids.forEach(element=> element.addEventListener('mouseover', changePencilColor('rgb(0, 0, 0)')));
        }
    }

    //Add Reset Button to Screen//
let newbutton = document.createElement("button");
newbutton.classList.add("resetbtn");
newbutton.textContent = "Reset";
buttoncontain.appendChild(newbutton)

//Event Listeners to Change Colors//
function changeSquareColor () {
    const allSquares = document.querySelectorAll(".grid-item");
    allSquares.forEach((block) => {
        block.addEventListener("mouseover", () => {
            block.style.backgroundColor = "black";
            
        });
    
    block.addEventListener("mouseout", () => {
        block.style.backgroundColor = " ";
    });
    
    });
    
    //Event Listener for Reset Button//
    newbutton.addEventListener("click", () => {
        allSquares.forEach((square) => {
            square.style.backgroundColor = "white";
        });
    });
    
    }

    changeSquareColor();    

//Add Rainbow Button to Screen//
let rainbowBtn = document.createElement("button");
rainbowBtn.classList.add("rainbowBtn");
rainbowBtn.textContent = "Rainbow";
buttoncontain.appendChild(rainbowBtn)

function randomInt(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function randomColor() {
    return `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
}

function changePencilColor(color) {
    return function(e) {
        e.target.style.backgroundColor = color;
    }
}

rainbowBtn.addEventListener('click', function() {
    rainbowColorIsOn = !rainbowColorIsOn
    randomColor()
    addMouseoverToGrids()
});

//Create a shading button

let shadingBtn = document.createElement("button");
shadingBtn.classList.add("shadingBtn");
shadingBtn.textContent = "Shading";
buttoncontain.appendChild(shadingBtn)

function darkenPencilColor() {
    let dark = 255;
    return function(e) {
        dark -= 25;
        e.target.style.backgroundColor = `rgb(${dark}, ${dark}, ${dark})`;
    }
}

shadingBtn.addEventListener('click', function() {
    const grids = document.querySelectorAll('.grid-item');
    grids.forEach(grid => grid.addEventListener('mouseover', darkenPencilColor()));
});