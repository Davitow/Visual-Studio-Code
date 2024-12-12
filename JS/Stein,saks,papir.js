document.getElementById("play").addEventListener("click", play)

let humanScore = 0;
let computerScore = 0;

function play() {
    let value = document.getElementById("choice").value;
    const choices = ["stein", "papir", "saks"];
    console.log(value);
    
    if (!choices.includes(value)) {
        console.log("Not valid choice");
        document.getElementById("result").innerText = "Not valid choice";
        return;
    }
    
    let robot = choices[Math.floor(Math.random() * 3)];
    console.log("Robot choice: " + robot);
    
    if (value === robot) {
        console.log("Tie");
        document.getElementById("result").innerText = "Tie";
    } 
    else if ((value === "stein" && robot === "saks") || 
             (value === "papir" && robot === "stein") || 
             (value === "saks" && robot === "papir")) {
        console.log("Player won");
        document.getElementById("result").innerText = "You Win!";
        humanScore++;
    } 
    else {
        console.log("Robot won");
        document.getElementById("result").innerText = "Robot wins";
        computerScore++;
    }
    
    document.getElementById("human-score").innerText = "Player score: " + humanScore;
    document.getElementById("robot-score").innerText = "Robot score: " + computerScore;
}