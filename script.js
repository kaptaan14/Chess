// Chessboard size (8x8)
const boardSize = 8;
const chessboard = document.getElementById('chessboard');

// Initialize the chessboard

function createChessboard() {
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.classList.add('draggable')
            square.classList.add(`${row}${col}`)
            square.dataset.row = row;
            square.dataset.col = col;

            // Add alternating colors to the squares
            if ((row + col) % 2 === 0) {
                square.classList.add('light');
            } else {
                square.classList.add('dark');
            }

            //blue  pieces

            if (row == 6) {
                let img = `<img  src='images/bluePawn.png'>`
                square.innerHTML = img

            }
            if ((row == 7 && col == 0) || (row == 7 && col == 7)) {
                let img = `<img src='images/blueRook.png'>`
                square.innerHTML = img

            }
            if ((row == 7 && col == 1) || (row == 7 && col == 6)) {
                let img = `<img src='images/blueHorse.png'>`
                square.innerHTML = img

            }
            if ((row == 7 && col == 2) || (row == 7 && col == 5)) {
                let img = `<img src='images/blueBishop.png'>`
                square.innerHTML = img

            }
            if (row == 7 && col == 4) {
                let img = `<img src='images/blueQueen.png'>`
                square.innerHTML = img

            }
            if (row == 7 && col == 3) {
                let img = `<img src='images/blueKing.png'>`
                square.innerHTML = img

            }

            //red pieces
            if (row == 1) {
                let img = `<img src='images/redPawn.png'>`
                square.innerHTML = img

            }
            if ((row == 0 && col == 0) || (row == 0 && col == 7)) {
                let img = `<img src='images/redRook.png'>`
                square.innerHTML = img

            }
            if ((row == 0 && col == 1) || (row == 0 && col == 6)) {
                let img = `<img src='images/redHorse.png'>`
                square.innerHTML = img

            }
            if ((row == 0 && col == 2) || (row == 0 && col == 5)) {
                let img = `<img src='images/redBishop.png'>`
                square.innerHTML = img

            }
            if (row == 0 && col == 4) {
                let img = `<img src='images/redQueen.png'>`
                square.innerHTML = img

            }
            if (row == 0 && col == 3) {
                let img = `<img src='images/redKing.png'>`
                square.innerHTML = img

            }


            square.addEventListener('click', handleSquareClick);


            chessboard.appendChild(square);
        }
    }
}



function handleSquareClick(event) {
    const square = event.target;
    const row = square.dataset.row;
    const col = square.dataset.col;
}


createChessboard();
const draggable = document.querySelectorAll('.draggable')
let prev;
draggable.forEach((element)=>{
    
    element.addEventListener('dragstart',(e)=>{
        prev = element
        const data = element.innerHTML
        e.dataTransfer.setData('text/html', data);
        
    })

    element.addEventListener('dragover', (e) => {
        console.log(e.target.innerHTML)
        e.preventDefault();
    });

    element.addEventListener('drop', (e) => {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/html');
        element.innerHTML = data;
        prev.innerHTML = ''
    });
})

