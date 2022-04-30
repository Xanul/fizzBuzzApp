const FizzBuzzService = require("../../../lib/services/FizzBuzzService");
const Reader = require("../../../lib/utils/Reader");

describe("Testing the FizzBuzzService class", () => {

    const explorers = Reader.readJsonFile("./data/explorers.json");
    const explorersFizzBuzz = explorers.map((explorer)=> {
        return FizzBuzzService.applyValidationInExplorer(explorer);
    });

    test("Testing applyValidationInExplorer method", () => {
    
        expect(explorersFizzBuzz.length).toBe(15);
        expect(explorersFizzBuzz[0]).toMatchObject({trick: 1});
        expect(explorersFizzBuzz[2]).toMatchObject({trick:"FIZZ"});
        expect(explorersFizzBuzz[4]).toMatchObject({trick: "BUZZ"});
        expect(explorersFizzBuzz[14]).toMatchObject({trick: "FIZZBUZZ"});
        
    });

    test('Testing applyValidationInNumber method', () => {

        const test1 = {score: 1, trick: 1}
        const test2 = {score: 3, trick: "FIZZ"}
        const test3 = {score: 5, trick: "BUZZ"}
        const test4 = {score:15, trick: "FIZZBUZZ"}

        expect(FizzBuzzService.applyValidationInNumber(1)).toEqual(test1)
        expect(FizzBuzzService.applyValidationInNumber(3)).toEqual(test2)
        expect(FizzBuzzService.applyValidationInNumber(5)).toEqual(test3)
        expect(FizzBuzzService.applyValidationInNumber(15)).toEqual(test4)
    })

});