// Q.1
// 1. covert the number to string
// 2. slpit into an array
// 3. reverse the array
// 4. join it back
// 5. print it

var myNumber = string(15243);

function reverseNumber(num) {
  return num.split("").reverse().join("");
}

console.log(reverseNumber(myNumber));

// Q. 2

var string = "keyincollege";

function stringSorted(s) {
  return s.split("").sort().join("");
}

console.log(stringSorted(string));

// Q. 3

var fileName = "keyin.js";

function splitName(s) {
  return s.split(".");
}

console.log(splitName(fileName));

// Q. 4

function currentDate() {
  let date = new Date();
  return `${date.getMonth() + 1} - ${date.getDate()} - ${date.getFullYear()}`;
}

console.log(currentDate());

// Q. 5

function captalize(str) {
  Regex = /^[a-z]/;
  if (Regex.test(str)) str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

console.log(captalize("hello"));

// Q. 6

function checkPeriod(str) {
  return str.includes(".") ? "contain period" : "no period";
}

console.log(checkPeriod("hello."));

// Q. 7

function putSuffix(num) {
  if (typeof num == "undefined") return;
  if (num % 100 >= 11 && num % 100 <= 13) return num + "th";

  switch (num % 10) {
    case 1:
      return num + "st";
    case 2:
      return num + "nd";
    case 3:
      return num + "rd";
  }
  return num + "th";
}

console.log(putSuffix(23));
