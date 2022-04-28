const FizzBuzzService = require("../../../lib/services/FizzBuzzService")
const Reader = require("../../../lib/utils/Reader")

describe('Testing the FizzBuzzService class', () => {

    const explorers = Reader.readJsonFile('./data/explorers.json')
    const explorersFizzBuzz = explorers.map((explorer)=> {
        return FizzBuzzService.applyValidationInExplorer(explorer)
    })

    test('Testing applyValidationInExplorer method', () => {
    
      expect(explorersFizzBuzz.length).toBe(155)
      expect(explorersFizzBuzz[0]).toMatchObject({trick: 1})
      expect(explorersFizzBuzz[2]).toMatchObject({trick:"FIZZ"})
      expect(explorersFizzBuzz[4]).toMatchObject({trick: 'BUZZ'})
      expect(explorersFizzBuzz[14]).toMatchObject({trick: "FIZZBUZZ"})
        
    })

})