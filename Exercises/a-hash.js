'use strict';

const phonebook = {
  Jim: '380294690286',
  Tom: '380609671563',
  Kim: '380850326536',
  Ben: '380376030760',
  Dan: '380957306380',
};

const findPhoneByName = name => phonebook[name];

module.exports = { phonebook, findPhoneByName };
