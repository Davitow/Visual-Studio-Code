function displayGreeting() {
    //Får value fra brukeren//
    var userName = document.getElementById("nameInput").value;

    //Sjekker om et navn er skrevet inn//
    if (userName.trim() !== "") {
        //Vis hilsen med det skrevet inn navnet//
        document.getElementById("nameOutput").innerHTML = "Hello, " + userName + "!";
        document.getElementById("nameOutput").style.color = "black"; //Setter fargen på hilsen teksten til svart//
    } else {
        //Hvis ingen navn er skrevet inn, spør brukeren om å skrive in navn//
        document.getElementById("nameOutput").innerHTML = "Skriv inn navn"; //Viser feilmelding om submit knappen er trykket og ingenting er skrevet in//
        document.getElementById("nameOutput").style.color = "red"; //Sett fargeteksten til rød på feilmeldingen//
    }
}