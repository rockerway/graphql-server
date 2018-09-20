const db = require('./db');

const Query = {
  characters: () => db.characters.list().filter((character) => character.role != "player"),
  character: (root, { id }) => db.characters.get(id),
  screens: () => db.screens.list(),
  screen: (root, { id }) => db.screens.get(id),
  player: (root, { name }) => db.characters.list().
    filter((player) => player.role === "player" && player.name === name)
};

const Mutation = {
  createCharacter: (root, { input }) => {
    const id = db.characters.create(input);
    return db.characters.get(id);
  },
  updateCharacter: (root, { input }) => {
    db.characters.update(input);
    return db.characters.get(input.id)
  }
};

const Screen = {
  characters: (screen) => db.characters.list()
    .filter((character) => character.role != "player" && character.screenID === screen.id),
  mapObjects: (screen) => db.mapObjects.list()
    .filter((mapObject) => mapObject.screenID === screen.id)
};

const Character = {
  events: (character) => db.events.list()
    .filter((event) => event.characterID == character.id)
};

module.exports = { Query, Mutation, Screen, Character };