function add7(num) {
    return num + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize (word, capWord) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function lastLetter (word) {
    return word.slice(-1);
}

function fizzBuzz () {
    let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

    for (let i = 1; i <= answer; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();