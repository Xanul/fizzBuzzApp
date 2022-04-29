const Reader = require("../../../lib/utils/Reader");

describe("Testing the Reader.js file", () => {
    test("Testing reading a file", () => {
        const explorers = Reader.readJsonFile("./data/explorers.json");
        expect(explorers).toBeDefined();
    });
});