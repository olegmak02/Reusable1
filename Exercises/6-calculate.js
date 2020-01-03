'use strict';

const square = a => a * a;

const cube = a => a ** 3;

const average = function (a, b) {
  const sum = a + b;
  return sum / 2;
};

const calculate = function () {
  const arr = [];
  for (let a = 0; a <= 9; a++) {
    arr[a] = average(square(a), cube(a));
  }
  return arr;
};

module.exports = { square, cube, average, calculate };
