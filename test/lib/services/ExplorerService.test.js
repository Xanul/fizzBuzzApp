const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Testing the ExplorerService class", () => {
  const explorers = Reader.readJsonFile("./data/explorers.json");

  test("Testing filterByMission static method", () => {
    const explorersInNode = ExplorerService.filterByMission(explorers, "node");
    expect(explorersInNode.length).toBe(10);
    expect(explorersInNode[0]).toMatchObject({ mission: "node" });
  });

  test("Testing getAmountOfExplorersByMission statis method", () => {
    const numberOfExplorersByMission =
      ExplorerService.getAmountOfExplorersByMission(explorers, "java");
    expect(numberOfExplorersByMission).toMatch(/java/);
    expect(numberOfExplorersByMission).toMatch(/5/);
  });

  test("Testing getExplorersUsernamesByMission", () => {
    const explorersGitHubUsernames =
      ExplorerService.getExplorersUsernamesByMission(explorers, "java");
    expect(explorersGitHubUsernames.length).toBe(5);
    expect(explorersGitHubUsernames[0]).toMatch(/GitHub/);
  });
});
  