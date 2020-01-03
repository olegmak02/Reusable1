'use strict';

const phonebook = [
  { name: 'Jim', phone: '380294690286' },
  { name: 'Tom', phone: '380609671563' },
  { name: 'Kim', phone: '380850326536' },
  { name: 'Ben', phone: '380376030760' },
  { name: 'Dan', phone: '380957306380' },
];

const findPhoneByName = name => {
  for (const names of phonebook) {
    if (names.name === name) return names.phone;
  }
};

module.exports = { phonebook, findPhoneByName };
