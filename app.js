const fs = require("fs"); 

const rawdata = fs.readFileSync("./data/explorers.json");
const explorers = JSON.parse(rawdata); 

// Get explorers in Node
const explorersInNode = explorers.filter((explorer) => explorer.mission == "node");


// Get GitHub usernames from the explorers in node
const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == "node");
const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);

// Apply fizzBuzz to a explorer
const fizzBuzz = (explorer) => {
    if(explorer.score%5 === 0 && explorer.score%3 === 0) {
        explorer.trick = "FIZZBUZZ"
        return explorer
    }
    else if (explorer.score %3 === 0){
        explorer.trick = "FIZZ"
        return explorer
    }
    else if (explorer.score %5 ===0){
        explorer.trick = "BUZZ"
        return explorer
    }
    explorer.trick = explorer.score
    return explorer
    
}

const fizzBuzzExplorers = explorersInNode.map((element) => {
    return fizzBuzz(element)
})

const fizzBuzzExplorersBasic = fizzBuzzExplorers.map((element)=> {
    return `Explorer's Name: ${element.name}, Trick: ${element.trick}`
})
console.log(`\nNumber of explorers in Node: ${explorersInNode.length} `)
console.log(`\nThe GitHub Usernames of the explorers are: ${usernamesInNode}`)
console.log('\nList of explorers in node with FizzBuzz applied')
console.log(fizzBuzzExplorersBasic)
