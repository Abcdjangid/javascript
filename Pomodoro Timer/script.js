const Timer = document.getElementById("timer");
const Start = document.getElementById("start");
const Stop = document.getElementById("stop");
const Reset = document.getElementById("Reset");


let interval;
let timeleft = 1500;

function updateTimer(){
    let minutes = Math.floor(timeleft/60);
    let seconds = timeleft%60;
    let formatedtime = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`;
    Timer.innerHTML = formatedtime;
}

function startTimer(){
    interval = setInterval(() => {
        timeleft--;
        updateTimer();
        if(timeleft === 0){
            clearInterval(interval);
            alert("Time Up!");
            timeleft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer(){
    clearInterval(interval);
}

function ResetTimer(){
    clearInterval(interval);
    timeleft = 1500;
    updateTimer();
}



Start.addEventListener("click", startTimer);
Stop.addEventListener("click", stopTimer);
Reset.addEventListener("click", ResetTimer);