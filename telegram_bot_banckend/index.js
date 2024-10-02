const TelegramBot = require("node-telegram-bot-api");

const token = "7122295948:AAE1aVVjbzzRUxA0YMoNZxw9TYdsXT8VWlE";

const bot = new TelegramBot(token, { polling: true });

// bot.onText(/\/start /, (msg) => {
//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, "shamim",{
//     reply_markup: {
//       inline_keyboard: [
//         [
//           {
//             text: "Open",
//             web_app: { url: "https://telegram-bot-phi-ten.vercel.app" },
//           },
//         ],
//       ],
//     },
//   });
// });

bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  console.log(msg.text);
  if(msg.text == "/start" ){

      bot.sendMessage(chatId, "Received your message /start", {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "Open",
                web_app: { url: "https://telegram-bot-phi-ten.vercel.app" },
              },
            ],
          ],
        },
      });
    }else{
      bot.sendMessage(chatId, "thank for your response waiting for review", {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: "waiting or Open",
                web_app: { url: "https://telegram-bot-phi-ten.vercel.app" },
              },
            ],
          ],
        },
      });

  }
  

  // send a message to the chat acknowledging receipt of their message
});
