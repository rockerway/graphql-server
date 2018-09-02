const db = require('./db');

const Query = {
  characters: () => db.characters.list().filter((character) => character.role != "player"),
  character: (root, {id}) => db.characters.get(id),
  screens: () => db.screens.list(),
  screen:(root, {id}) => db.screens.get(id),
  player: (root, {name}) => db.characters.list().
    filter((player) => player.role === "player" && player.name === name)
};

const Mutation = {
  createCharacter: (root, {input}) => {
    const id = db.characters.create(input);
    return db.characters.get(id);
  },
  updateCharacter: (root, {input}) => {
    db.characters.update(input);
    return db.characters.get(input.id)
  }
};

const Screen = {
  characters: (screen) => db.characters.list()
    .filter((character) => character.role != "player" && character.screenID === screen.id),
  items: (screen) => db.items.list()
    .filter((item) => item.screenID === screen.id)
};

module.exports = { Query, Mutation, Screen };