class FizzBuzzService {

    static applyValidationInExplorer(explorer) {
        if(explorer.score%5 === 0 && explorer.score%3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        }
        else if (explorer.score %3 === 0){
            explorer.trick = "FIZZ";
            return explorer;
        }
        else if (explorer.score %5 ===0){
            explorer.trick = "BUZZ";
            return explorer;
        }
        explorer.trick = explorer.score;
        return explorer;
    }

    static applyValidationInNumber(number){
        if (number %5 === 0 && number%3 === 0){
            return {score: number, trick: "FIZZBUZZ"};
        }
        else if (number %3 === 0){
            return {score: number, trick: "FIZZ"};
        }
        else if (number%5 ===0){
            return {score: number, trick: "BUZZ"};
        }
        else {
            return {score: number, trick: number};
        }
    }

}

module.exports = FizzBuzzService;