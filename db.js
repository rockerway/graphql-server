const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  characters: store.collection('characters'),
  screens: store.collection('screens'),
  items: store.collection('items')
};
