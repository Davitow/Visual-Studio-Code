function displayGreeting() {
    //Får value fra brukeren//
    var userName = document.getElementById("nameInput").value;

    //Sjekker om et navn er skrevet inn//
    if (userName.trim() !== "") {
        //Vis hilsen med det skrevet inn navnet//
        document.getElementById("nameOutput").innerHTML = "Hello, " + userName + "!";
    } else {
        //Hvis ingen navn er skrevet inn, spør brukeren om å skrive in navn//
        document.getElementById("nameOutput").innerHTML = "Skriv inn navn";
    }
}