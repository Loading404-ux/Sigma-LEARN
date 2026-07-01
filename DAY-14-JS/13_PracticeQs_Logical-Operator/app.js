// PracticeQs
// Qs1

// good string

let str = "apple";

if (str[0] == "a" && str.length > 3) {
    console.log(`${str} is a good string.`);
} else {
    console.log(`${str} is not a good string.`);
}


// Qs2

// my answer is : safe.

// check

let num = 12;

if ((num % 3 == 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}