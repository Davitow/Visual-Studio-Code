let etTall = 40

if (etTall % 2 === 0) {
    console.log(etTall, "er delelig på 2")
}

const tall = [1, 35, -40, 17, 48, 57, 98]

tall.push(etTall) // Legger til variabelen etTall //
let index = 2
tall.splice(index, 1); // Fjerner det tredje tallet fra array //

for (t = 0; t<tall.length; t++) {
    console.log(tall[t])
}

/*
Oppgaver:
1. Summer alle tall i arrayen og skriv ut svaret til console.log
Svar:

let sum = 0

for (t = 0; t<tall.length; t++) {
    sum = sum + tall[t]
}

console.log(sum)

2. Skriv ut alle tall i arrayen som er partall
Svar:
for (t = 0; t<tall.length; t++) {
    console.log(tall[t])

    if (tall[t] % 2 === 0) {
    console.log(tall[t], "er delelig på 2")
}
}

3. Finn det minste og det største tallet i arrayen og skriv ut svaret til console.log
Svar:


4. Skriv kode som reverser innholdet i arrayen, dvs at innholdet er i omvendt rekkefølge
5. Skriv kode som sorterer innholdet i arrayen
*/