'use strict';

const fn = function () {
  const constObj = { name: 'string' };
  let varObj = { name: 'string' };
  constObj.name = 'another string';
  varObj.name = 'another string';
  varObj = { field2: '' };
};
module.exports = { fn };
