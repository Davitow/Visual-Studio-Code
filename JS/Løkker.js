let a = 0

for (let i= 0; i<=50; i += 1) {

    if (i % 15 == 0) console.log(i + (" "), "FizzBuzz")
    else if (i % 3 == 0) console.log( i + (" "), "Fizz");
    else if (i % 5 == 0) console.log( i + (" "),"Buzz");

console.log(i)
}