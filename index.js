let numBoxes = 6;
let colors = generateColors(numBoxes);
const start_btn = document.querySelector('.start');
const resetbtn = document.querySelector('.reset');
let boxes = document.querySelectorAll('.box');
let colorDisplay = document.querySelector('.colorDisplay');
let pickedColor = pickColor();
let message = document.querySelector('.message');
let checkbox = document.querySelector('input[type="checkbox"]');
let score = document.querySelector('.score');
let playerScore = 0;
let numOfRound = 5;
let playround = numOfRound;
let round = document.querySelector('#round');
let isGameOver = false;

round.textContent = playround;

colorDisplay.textContent = pickedColor;
resetbtn.disabled = true;

start_btn.addEventListener('click', start);
resetbtn.addEventListener('click', reset);
    
      
// the toogle swtich will change the difficulty of the game
checkbox.addEventListener('change', function(){
    if(checkbox.checked){
        isGameOver = true;
        start_btn.disabled = false;
        resetbtn.disabled = true;
        playround = numOfRound;
        round.textContent = playround;
        playerScore = 0;
        score.textContent = 0;
        numBoxes = 6
        colors = generateColors(numBoxes);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].style.display = 'block';
        }
    }else{
        isGameOver = true;
        start_btn.disabled = false;
        resetbtn.disabled = true;
        playround = numOfRound;
        round.textContent = playround;
        playerScore = 0;
        score.textContent = 0;
        numBoxes = 3;
        colors = generateColors(numBoxes);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i =0; i < boxes.length; i++){
            if(colors[i]){
                boxes[i].style.backgroundColor = colors[i];
            } else{
                boxes[i].style.display = 'none';
            }
        }
    }
});

function start(){
    isGameOver = false;
    resetbtn.disabled = false;
    start_btn.disabled = true;
    if(!isGameOver){
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.backgroundColor = colors[i];
            boxes[i].addEventListener('click', function(){
                let clickedColor = this.style.backgroundColor;
                if(playround >= 1){
                    if(clickedColor === pickedColor){
                    message.textContent = 'Correct!';
                        playerScore += 10;
                        score.textContent = playerScore;
                        next();
                    }else{
                        message.textContent = 'Try Again!';
                        boxes[i].style.backgroundColor = '#D3d0cb';
                        playerScore--;
                        score.textContent = playerScore;
                        }
                }else{
                    isGameOver = true;
                    
                }
            });
            };
    
}
};  

function reset(){
    message.textContent = "";
    isGameOver = true;
    playround = numOfRound;
    round.textContent = playround;
    start_btn.disabled = false;
    resetbtn.disabled = true;
    playerScore = 0;
    score.textContent = 0;
    colors = generateColors(numBoxes);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < boxes.length; i++){
        boxes[i].style.backgroundColor = colors[i];
    }
}

// grasp the picked color 
function pickColor(){
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColors(num){
    // make an array
    const arr = [];
    // add num random colors to array
    for(let i = 0; i < num; i++){
        arr.push(randomColor());
    }
    return arr;
}
// random the color
function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}



function next(){
        playround--;
        round.textContent = playround;
        colors = generateColors(numBoxes);
        pickedColor = pickColor();
        colorDisplay.textContent = pickedColor;
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.backgroundColor = colors[i];
        }
    }


