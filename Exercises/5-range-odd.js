'use strict';

const rangeOdd = (start, end) => {
  const arr = [];
  start = (start % 2 === 1 | start % 2 === -1 ? start : start + 1);
  for (let i = 0; i <= (end - start) / 2; i++) {
    arr[i] = start + i * 2;
  }
  return arr;
};

module.exports = { rangeOdd };
