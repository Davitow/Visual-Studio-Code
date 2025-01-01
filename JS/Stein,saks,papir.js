// Legger til en event listener som lytter etter et "click" på elementet med id "play". //
// Når det blir klikket på, vil funksjonen `play` bli kalt. //
document.getElementById("play").addEventListener("click", play)

// Variabler for å holde styr på spillerens og robotens poeng //
let humanScore = 0;
let computerScore = 0;

// Funksjon som kjøres når spilleren klikker på "play"-knappen //
function play() {
    // Henter verdien som er valgt i input-feltet med id "choice" //
    let value = document.getElementById("choice").value;
    
    // Definerer et array med de tre gyldige valgene: stein, papir og saks //
    const choices = ["stein", "papir", "saks"];
    
    // Skriver ut spillerens valg i konsollen for debugging //
    console.log(value);
    
    // Sjekker om spillerens valg er gyldig (må være ett av alternativene i `choices`) //
    if (!choices.includes(value)) {
        console.log("Not valid choice"); // Hvis ikke, skriv ut at valget er ugyldig i konsollen //
        document.getElementById("result").innerText = "Not valid choice"; // Vist til spilleren at valget er ugyldig //
        return; // Stopper funksjonen her, ingen videre spill logikk utføres //
    }
    
    // Velger et tilfeldig alternativ for roboten (stein, papir eller saks) //
    let robot = choices[Math.floor(Math.random() * 3)];
    
    // Skriver ut robotens valg i konsollen for debugging //
    console.log("Robot choice: " + robot);
    
    // Sjekker om spillerens valg er likt robotens valg (uavgjort) //
    if (value === robot) {
        console.log("Tie"); // Skriver ut at det ble uavgjort i konsollen //
        document.getElementById("result").innerText = "Tie"; // Vist til spilleren at det er uavgjort //
    } 
    // Sjekker om spilleren har vunnet (bestemmes av stein vs saks, papir vs stein, eller saks vs papir) //
    else if ((value === "stein" && robot === "saks") || 
             (value === "papir" && robot === "stein") || 
             (value === "saks" && robot === "papir")) {
        console.log("Player won"); // Skriver ut at spilleren vant i konsollen //
        document.getElementById("result").innerText = "You Win!"; // Vist til spilleren at han/hun vant //
        humanScore++; // Øker spillerens poeng med 1 //
    } 
    // Hvis ingen av de forrige betingelsene ble oppfylt, har roboten vunnet //
    else {
        console.log("Robot won"); // Skriver ut at roboten vant i konsollen //
        document.getElementById("result").innerText = "Robot wins"; // Vist til spilleren at roboten vant //
        computerScore++; // Øker robotens poeng med 1 //
    }
    
    // Oppdaterer poengsummene på skjermen for både spiller og robot //
    document.getElementById("human-score").innerText = "Player score: " + humanScore;
    document.getElementById("robot-score").innerText = "Robot score: " + computerScore;
}