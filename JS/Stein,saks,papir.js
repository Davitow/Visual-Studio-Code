document.getElementById("play").addEventListener("click", play)

let humanScore = 0
let computerScore = 0
 

function play() {
    let value = document.getElementById("choice").value
    const choices = ["stein", "papir", "saks"]
    console.log(value)
    let robot = choices[Math.floor(Math.random() * 3)]
    if (!choices.includes(value)) {
        console.log("Not valid choice")
    }
    if (value === robot) {
        console.log("Tie")
        document.getElementById("result").innerText = "Tie"
    }
    else if (value === "stein" & robot === "saks") {
        console.log("Player won")
        document.getElementById("result").innerText = "You Win!"
        humanScore++;
    }
    else if (value === "papir" & robot === "stein") {
        console.log("Player won")
        document.getElementById("result").innerText = "You Win!"
        humanScore++;
    }
    else if (value === "saks" & robot === "papir") {
        console.log("Player won")
        document.getElementById("result").innerText = "You Win!"
        humanScore++;
    }
    else {
        console.log("Robot won")
        computerScore++;
        document.getElementById("result").innerText = "Robot wins"
    }
    document.getElementById("human-score").innerText = "Player score:"+ humanScore
    document.getElementById("robot-score").innerText = "Robot score:" + computerScore
}

let score = document.getElementById("")