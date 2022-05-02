const ExplorerController = require("../../lib/controllers/ExplorerController");


describe("Testing ExplorerService.js", () => {

    test("Testing getExplorersByMission static method", () => {
        const nodeExplorers = ExplorerController.getExplorersByMission("node");
        expect(nodeExplorers.length).toBe(10);
        expect(nodeExplorers[0]).toMatchObject({mission: "node"});
        const javaExplorers = ExplorerController.getExplorersByMission("java");
        expect(javaExplorers.length).toBe(5);
        expect(javaExplorers[0]).toMatchObject({mission:"java"});
    });

    test("Testing getExplorersUsernamesByMission", () => {
        const nodeUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(nodeUsernames.length).toBe(10);
        expect(nodeUsernames[0]).toMatch(/Username/);
        const javaUsernames = ExplorerController.getExplorersUsernamesByMission("java");
        expect(javaUsernames.length).toBe(5);
        expect(javaUsernames[0]).toMatch(/Username/);
    });

    test("Testing getAmountOfExplorersByMission", () => {
        const nodeAmount = ExplorerController.getExplorersAmountByMission("node");
        expect(nodeAmount).toMatch(/10/);
        const javaAmount = ExplorerController.getExplorersAmountByMission("java");
        expect(javaAmount).toMatch(/5/);
        
    });

    test("Testing getFizzBuzzByNumber", () => {

        const test1 = {score: 1, trick: 1};
        const test2 = {score: 3, trick: "FIZZ"};
        const test3 = {score: 5, trick: "BUZZ"};
        const test4 = {score:15, trick: "FIZZBUZZ"};

        expect(ExplorerController.getFizzBuzzByNumber(1)).toEqual(test1);
        expect(ExplorerController.getFizzBuzzByNumber(3)).toEqual(test2);
        expect(ExplorerController.getFizzBuzzByNumber(5)).toEqual(test3);
        expect(ExplorerController.getFizzBuzzByNumber(15)).toEqual(test4);
        
    });

});