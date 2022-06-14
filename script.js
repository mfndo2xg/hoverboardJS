    // BOX ANIMATION

// const boxesContainer = document.getElementById('boxes')
// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => 
//     boxesContainer.classList.toggle('big')
// )

// function createBoxes(){
//     for (let i = 0; i<4; i++){
//         for( let j = 0; j<4; j++){
//             const box = document.createElement('div')
//             box.classList.add('box')
//             box.style.backgroundPosition =  `${-j * 125}px ${-i * 125}px`
//             boxesContainer.appendChild(box)
//         }
//     }
// }

// createBoxes();


const container = document.getElementById('container')
const colors = ['#FF0000', '#00FFFF', '#0000FF', '#00008B'];
const squares = 500;

for(let i = 0; i < squares; i++){
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))

    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square)

}

function setColor(element){
    const color = getRandomColors()
    element.style.background = color
    element.style.boxSahdow = `0 0 2px ${colors},  0 0 10px ${colors}`
}

function removeColor(element){
    element.style.background = `#3b3b3b`;
}

function getRandomColors(){
    return colors[Math.floor(Math.random() * colors.length)]
}