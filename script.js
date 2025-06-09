let number = 5;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// Switch
let day = 2;
switch (day) {
  case 1: console.log("Sunday"); break;
  case 2: console.log("Monday"); break;
  case 3: console.log("Tuesday"); break;
  case 4: console.log("Wednesday"); break;
  case 5: console.log("Thursday"); break;
  case 6: console.log("Friday"); break;
  case 7: console.log("Saturday"); break;
  default: console.log("Invalid");
}

// For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop:", i);
}

// While loop
let i2 = 1;
while (i2 <= 5) {
    console.log("While loop:", i2);
    i2++;
}

// Do...while loop
let j = 1;
do {
    console.log("Do...While loop:", j);
    j++;
} while (j <= 5);

// Break demo
let k = 1;
while (k <= 5) {
    if (k === 4) break;
    console.log("Break loop:", k);
    k++;
}

// Continue demo
let m = 2;
while (m <= 5) {
    if (m === 4) {
        m++;
        continue;
    }
    console.log("Continue loop:", m);
    m++;
}

// Scope example
let globalVar = "I'm global!";
function scopeExample() {
    let localVar = "I'm local!";
    console.log(globalVar);
    console.log(localVar);
}
scopeExample();
