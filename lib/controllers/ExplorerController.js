const FizzBuzzService = require("../services/FizzBuzzService");
const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");

class ExplorerController {
    static getExplorersByMission(mission){
        const explorers = Reader.readJsonFile('./data/explorers.json');
        
        const filtered = ExplorerService.filterByMission(explorers, mission);
        return filtered
    }

    static getExplorersUsernamesByMission(mission){
        const explorers = Reader.readJsonFile('./data/explorers.json');
        
        const filtered = ExplorerService.getExplorersUsernamesByMission(explorers, mission)
        return filtered
    }

    static getExplorersAmountByMission(mission){
        const explorers = Reader.readJsonFile('./data/explorers.json');

        const filtered = ExplorerService.getAmountOfExplorersByMission(explorers, mission)
        return filtered
    }

}

module.exports = ExplorerController;