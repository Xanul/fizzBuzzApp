const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

// replace the value below with the Telegram token you receive from @BotFather
const token = "5380842647:AAH1ZvgK3dX9tKM0BFXijSwsmXwpN_rFVi0";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
    // 'msg' is the received Message from Telegram
    // 'match' is the result of executing the regexp above on the text content
    // of the message
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"

    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const numberToApplyFb = msg.text
    
    if(!isNaN(numberToApplyFb)){
        const fizzbuzzTrick = ExplorerController.getFizzBuzzByNumber(numberToApplyFb);
        const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick.trick}`;
        bot.sendMessage(chatId, responseBot);
    } else if (numberToApplyFb.toString() === "node"){
        const explorersArray = ExplorerController.getExplorersByMission("node");
        explorersArray.forEach((explorer)=> {
            const responseBot2 = `Los explorers de node son ${explorer.name}.`
            bot.sendMessage(chatId, responseBot2)
        })
    }
});

bot.on("message", (msg) => {
    const chatId = msg.chat.id;
    const message = msg.text;

    if(message === "node"){

    }
    else if (message === "java"){

    }
    else if (message === "Number of explorers in node"){
        const numberOfExplorers = ExplorerController.getExplorersAmountByMission("node");
        bot.sendMessage(chatId, numberOfExplorers)
    }
    else if (message === "Get explorers usernames"){
        
    }



})

bot.on("polling_error", console.log)