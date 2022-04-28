const Reader = require("./lib/utils/Reader");

const explorers = Reader.readJsonFile("./data/explorers.json")
console.log(explorers)