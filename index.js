const ExplorerController = require("./lib/controllers/ExplorerController");
const ExplorerService = require("./lib/services/ExplorerService");
const Reader = require("./lib/utils/Reader");

// const explorers = Reader.readJsonFile("./data/explorers.json");
// // console.log(explorers)

// const nodeGitHubUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
// console.log(nodeGitHubUsernames);

const test = ExplorerController.getExplorersByMission("node")
// console.log(test)
const test2 = ExplorerController.getExplorersUsernamesByMission("node")
// console.log(test2)
const test3 = ExplorerController.getExplorersAmountByMission("node")
console.log(test3)