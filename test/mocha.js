const { should } = require('should');
const { Query, Mutation, Screen } = require('../resolvers');
const db = require('../db');

describe('#Characters', () => {
    it('get all characters in screen 1 not include player', done => {
        let characters = Screen.characters({id: "1"});
        let characterNum = db.characters.list().
            filter((character) => character.role != "player" && character.screenID == "1").
            length;
        characters.should.length(characterNum);
        done()
    })

    it('get all characters in screen 2 not include player', done => {
        let characters = Screen.characters({id: "2"});
        let characterNum = db.characters.list().
            filter((character) => character.role != "player" && character.screenID == "2").
            length;
        characters.should.length(characterNum);
        done()
    })

    it('get all characters in screen 3 not include player', done => {
        let characters = Screen.characters({id: "3"});
        let characterNum = db.characters.list().
            filter((character) => character.role != "player" && character.screenID == "3").
            length;
        characters.should.length(characterNum);
        done()
    })

    it('get all characters in screen 4 not include player', done => {
        let characters = Screen.characters({id: "4"});
        let characterNum = db.characters.list().
            filter((character) => character.role != "player" && character.screenID == "4").
            length;
        characters.should.length(characterNum);
        done()
    })

    it('get all characters in screen 5 not include player', done => {
        let characters = Screen.characters({id: "5"});
        let characterNum = db.characters.list().
            filter((character) => character.role != "player" && character.screenID == "5").
            length;
        characters.should.length(characterNum);
        done()
    })

    it('get all characters in screen 6 not include player', done => {
        let characters = Screen.characters({id: "6"});
        let characterNum = db.characters.list().
            filter((character) => character.role != "player" && character.screenID == "6").
            length;
        characters.should.length(characterNum);
        done()
    })
})