// Definerer to variabler
let tall1 = 5;
let tall2 = 10;

// Skriver ut verdiene før bytte
console.log("Før bytte:");
console.log("tall1 =", tall1, "og tall2 =", tall2);

// Funksjon for å bytte verdiene
function byttVerdier() {
    let temp = tall1;
    tall1 = tall2;
    tall2 = temp;
}

// Kaller funksjonen for å bytte verdiene
byttVerdier();

// Skriver ut verdiene etter bytte
console.log("Etter bytte:");
console.log("tall1 =", tall1, "og tall2 =", tall2);
