const TelegramBot = require('node-telegram-bot-api')
const TOKEN = '924855588:AAF6fdTMtqpdakBgggMn91ZD8zVIiVOUWf4'
const bot = new TelegramBot(TOKEN, {
    polling: true
})
bot.on('message', (msg) => {
    console.log(msg)
})