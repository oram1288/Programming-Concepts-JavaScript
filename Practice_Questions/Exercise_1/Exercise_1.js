//1)
let label = "keyincollege";

let tlg = "ca";
let domainName = label + "." + tlg;

//2)
let isKeyin;
if (domainName === "keyincollege.ca") {
  isKeyin = true;
} else {
  isKeyin = false;
}

//3)
let isNotKeyin = !isKeyin;

//4)
let byte1 = Math.floor(Math.random() * 256);
let byte2 = Math.floor(Math.random() * 256);
let byte3 = Math.floor(Math.random() * 256);
let byte4 = Math.floor(Math.random() * 256);

//5)
let ipAddress = `${byte1}.${byte2}.${byte3}.${byte4}`;

//6)
let table = 5;

for (let i = 1; i <= 10; i++) {
  console.log(`${table} x ${i} = ${table * i}`);
}

//7)
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

//8)
let evenSum = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  }
}
console.log(`The sum of all even numbers are ${evenSum}`);

//9)
let numTest = 28;
let sum = 0;
for (let i = 1; i <= Math.round(numTest / 2); i++) {
  if (numTest % i === 0) {
    sum += i;
  }
}
if (sum === numTest) {
  console.log(`${numTest} is perfect`);
} else {
  console.log(`${numTest} is not perfect`);
}

//10)
let numTest2 = 11;
let sum2 = 0;

for (let i = 2; i <= Math.round(numTest2 / 2); i++) {
  if (numTest2 % i === 0) {
    sum2 += i;
  }
}
if (sum2 === 0) {
  console.log(`${numTest2} is prime`);
} else {
  console.log(`${numTest2} is not prime`);
}
