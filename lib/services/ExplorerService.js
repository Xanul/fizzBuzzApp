class ExplorerService {
  static filterByMission(explorersArray, mission) {
    return explorersArray.filter((explorer) => explorer.mission == mission);
  }

  static getAmountOfExplorersByMission(explorersArray, mission) {
    const filtered = explorersArray.filter(
      (explorer) => explorer.mission == mission
    ).length;
    return `The number of explorers in ${mission} is: ${filtered}`;
  }

  static getExplorersUsernamesByMission(explorersArray, mission) {
    const filtered = explorersArray.filter((explorer) => {
      return explorer.mission === mission;
    });
    const filtered2 = filtered.map((element) => {
      return `GitHub Username: ${element.githubUsername}`;
    });
    return filtered2;
  }

  static getExplorersByStack(explorersArray, stack) {
    if (stack) {
      return explorersArray.filter((item) => {
        return item.stacks.indexOf(stack) >= 0;
      });
    } else {
      return undefined;
    }
  }
}

module.exports = ExplorerService;
