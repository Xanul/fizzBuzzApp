const ExplorerService = require("./lib/services/ExplorerService");
const Reader = require("./lib/utils/Reader");

const explorers = Reader.readJsonFile("./data/explorers.json");
// console.log(explorers)

const nodeGitHubUsernames = ExplorerService.getExplorersUsernamesByMission(explorers, "java");
console.log(nodeGitHubUsernames);