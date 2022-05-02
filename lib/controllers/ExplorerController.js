const FizzBuzzService = require("../services/FizzBuzzService");
const ExplorerService = require("../services/ExplorerService");
const Reader = require("../utils/Reader");

const explorers = Reader.readJsonFile('./data/explorers.json');

class ExplorerController {
    static getExplorersByMission(mission){
        return ExplorerService.filterByMission(explorers, mission);
         
    }

    static getExplorersUsernamesByMission(mission){
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission)
        
    }

    static getExplorersAmountByMission(mission){
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission)
        
    }

    static getFizzBuzzByNumber(number){
        return FizzBuzzService.applyValidationInNumber(number)
    }

    static getExplorersByStack(stack){
        return ExplorerService.getExplorersByStack(explorers, stack)
    }

}




module.exports = ExplorerController;