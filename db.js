const { DataStore } = require('notarealdb');

const store = new DataStore('./data');

module.exports = {
  characters: store.collection('characters'),
  screens: store.collection('screens'),
  mapObjects: store.collection('mapObjects'),
  events: store.collection('events')
};
