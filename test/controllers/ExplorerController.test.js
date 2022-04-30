const ExplorerController = require("../../lib/controllers/ExplorerController");


describe('Testing ExplorerService.js', () => {

    test('Testing getExplorersByMission static method', () => {
        const nodeExplorers = ExplorerController.getExplorersByMission("node");
        expect(nodeExplorers.length).toBe(10);
        expect(nodeExplorers[0]).toMatchObject({mission: "node"});
        const javaExplorers = ExplorerController.getExplorersByMission("java");
        expect(javaExplorers.length).toBe(5);
        expect(javaExplorers[0]).toMatchObject({mission:"java"});
    })

    test('Testing getExplorersUsernamesByMission', () => {
        const nodeUsernames = ExplorerController.getExplorersUsernamesByMission("node");
        expect(nodeUsernames.length).toBe(10);
        expect(nodeUsernames[0]).toMatch(/Username/)
        const javaUsernames = ExplorerController.getExplorersUsernamesByMission("java");
        expect(javaUsernames.length).toBe(5);
        expect(javaUsernames[0]).toMatch(/Username/);
    })

    test('Testing getAmountOfExplorersByMission', () => {
        const nodeAmount = ExplorerController.getExplorersAmountByMission("node");
        console.log(nodeAmount)
        expect(nodeAmount).toMatch(/10/);
        const javaAmount = ExplorerController.getExplorersAmountByMission("java");
        console.log(javaAmount)
        expect(javaAmount).toMatch(/5/)
        
    })

})