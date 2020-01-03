'use strict';

const range = (start, end) => {
  const arr = [];
  for (let a = 0; a <= end - start; a++) {
    arr[a] = a + start;
  }
  return arr;
};

module.exports = { range };
