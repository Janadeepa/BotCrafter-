require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Welcome! Send /ping to get a pong.');
});

bot.onText(/\/ping/, (msg) => {
  bot.sendMessage(msg.chat.id, 'Pong!');
});