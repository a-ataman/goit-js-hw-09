const backround = document.querySelector("body")
const clickStart = document.querySelector("button[data-start]")
const clickStop = document.querySelector("button[data-stop]")
let timerRandom = null;
clickStop.disabled = true; 
    
clickStart.addEventListener("click", start)
clickStop.addEventListener("click", stop)

function start() {
    clickStart.disabled = true; 
    clickStop.disabled = false; 
 timerRandom = setInterval(() => {backround.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`}, 1000);

   
}

function stop() {
    clickStart.disabled = false; 
    clickStop.disabled = true; 
   clearInterval(timerRandom);
}

