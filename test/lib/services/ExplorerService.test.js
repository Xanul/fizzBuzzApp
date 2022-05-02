const ExplorerService = require("../../../lib/services/ExplorerService");
const Reader = require("../../../lib/utils/Reader");

describe("Testing the ExplorerService class", () => {
    const explorers = Reader.readJsonFile("./data/explorers.json");

    test("Testing filterByMission static method", () => {
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(10);
        expect(explorersInNode[0]).toMatchObject({ mission: "node" });
    });

    test("Testing getAmountOfExplorersByMission static method", () => {
        const numberOfExplorersByMission =
      ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(numberOfExplorersByMission).toMatch(/java/);
        expect(numberOfExplorersByMission).toMatch(/5/);
    });

    test("Testing getExplorersUsernamesByMission static method", () => {
        const explorersGitHubUsernames =
      ExplorerService.getExplorersUsernamesByMission(explorers, "java");
        expect(explorersGitHubUsernames.length).toBe(5);
        expect(explorersGitHubUsernames[0]).toMatch(/GitHub/);
    });

    test("Testing getExplorersByStack static method", () => {
        const explorersWithJavascriptStack = ExplorerService.getExplorersByStack(explorers, "javascript");
        expect(explorersWithJavascriptStack[0]["stacks"]).toContain("javascript");
        const explorersWithElixirStack = ExplorerService.getExplorersByStack(explorers, "elixir");
        expect(explorersWithElixirStack[0]["stacks"]).toContain("elixir");
        const explorerUndefined = ExplorerService.getExplorersByStack(explorers);
        expect(explorerUndefined).toBeUndefined();
    });

});
  