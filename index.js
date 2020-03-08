const telegramBot = require('node-telegram-bot-api')
const TOKEN ="924855588:AAF6fdTMtqpdakBgggMn91ZD8zVIiVOUWf4"

const bot = new telegramBot(TOKEN, {polling: true} )
bot.on('message', msg -> {
    bot.sendMessage(msg.chat.id, 'Hello from Heroku, bot says: ""Hi, ${msg.from.first_name}"')

    }

)
