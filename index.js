const ExplorerService = require("./lib/services/ExplorerService");
const Reader = require("./lib/utils/Reader");

const explorers = Reader.readJsonFile("./data/explorers.json")
// console.log(explorers)

const nodeExplorers = ExplorerService.filterByMission(explorers, "node")
// console.log(nodeExplorers)

const nodeGitHubUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "java")
console.log(nodeGitHubUsernames)