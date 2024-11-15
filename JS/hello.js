//hello,js//
console.log("Hei verden!");

//greetings.js//
const navn = "David";
console.log ("Hei," + " " + navn)

//Math.js//
let a = 10
let b = 8
console.log (a + b);

//fruits.js//
const fruits = ["Lemon", "Grapes", "Apple"]
console.log(fruits)

//modify_fruits.js//
function myFunction(frukt) {
    frukt.push("Appelsin")
    frukt.push("Appelsin")
    frukt.splice(1,2)
    return frukt
}

console.log (myFunction(fruits))
console.log (fruits)

//Welcome.js//
function welcomeMessage(name) {
    console.log(`Velkommen, ${name}!`);
  }
  
  welcomeMessage('David'); // Erstatt 'DittNavn' med ditt faktiske navn

//List_lenght.js//
const animals = ["Wolf", "Shark", "Racoon", "Spider"];
console.log(animals.length)

//checkList.js//
const colors = ["Grønn", "Oransje", "Lilla"];
console.log(colors.includes("Gul"))

//square.js//
function square(number) {
  let root = Math.sqrt(number);
  console.log(root)
}
square(81)

//listLoop.js//
const nummer = [1, 2, 3, 4, 5];
for (let i= 0; i<nummer.length; i += 1){

console.log(nummer[i])
}