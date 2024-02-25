// 1
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

console.log(areaOfCircle(5));

// 2
function roll(sides = 6) {
  return Math.floor(Math.random() * sides) + 1;
}

console.log(roll());
// or

let roll = (sides = 6) => Math.floor(Math.random() * sides + 1);

// 3
function convert(Celsius) {
  return (Fahrenheit = (Celcuis * 9) / 5 + 32);
}

console.log(convert());
// or

function CtoF(Celcius) {
  var Farenheit = (9 / 5) * Celcius + 32;
  console.log(Farenheit);
}
// or

let convertCtoF = (celsius) => (celsius * 9) / 5 + 32;

// 4
let advanceConvertCtoF = (temp, unit = "C") => {
  if (unit === "C") {
    return (temp * 9) / 5 + 32;
  } else if (unit === "F") {
    return ((temp - 32) * 5) / 9;
  }
};

// 5
function inUnder50(values) {
  var len = values.length;
  let flag = 0;
  for (var i = 0; i < len; i++)
    if (values[i] < 50) continue;
    else flag = 1;

  if (flag == 0) return true;
  else return false;
}
inUnder50(1, 2, 3, 4, 5, 50, 60);

// 6
function sums() {
  var count = numbers.length;
  var total = 0;
  for (var i = 0; i < count; i++) {
    total += numbers[i];
  }
  return total;
}
sums(1, 2, 3);

// 7

// 8

function subtractDiscount() {
  var discount = 20 / 100;
  if (total !== discount) return;
  if ((total == discount, total * discount));
  {
    total - discount;
  }
  return total;
}
