const Discord = require('discord.js');
const tokenfile = require('./tokenfile.json');
const botconfig = require('./botconfig.json');
const bot = new Discord.Client({disableEveryone: true});
//töltögesd be a terminálba a discord.js@12.5.3(Úgy hogy npm i discord.js@12.5.3)
//var és a let megegyezik de a vart jobban javaslom így ha programozni akarsz jsben
let botname = "Rapi"
bot.on("ready", async() =>{
    console.log(`${bot.user.username} Elindult!`)
    let státuszok = [
        "státusz1",
        "státusz2",
        "státusz3",
        "És így tovább stb",
        `${bot.guilds.cache.size} szerveren`
    ]
    setInterval(function(){
        let status = státuszok[Math.floor(Math.random()* státuszok.length)]
        bot.user.setActivity(status, {type: "WATCHING"})
    }, 3000)
})
bot.on("message", async message =>{
    var MessageArray = message.content.split(" ");
    var cmd = MessageArray[0];
    var args = MessageArray.slice(1);
    var prefix = botconfig.prefix;
    //ebbe az eventbe mehetnek a parancsok
}) // <-- ezen kívűl már nem lesznek jók a parancsaid

bot.login(tokenfile.token);