let nåværendeår = Number(2024);
let fødselsår = Number(2008);
let alder;

function finnAlder(){
    alder = (nåværendeår - fødselsår);
}

finnAlder();

console.log("Jeg er" + (" ") + (alder) + (" ") + ("år gammel"));
document.getElementById("output").innerHTML = "Jeg er " + alder + " år gammel.";