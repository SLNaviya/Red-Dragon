//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is RED DRAGON🔥
My Creator is Kumuthu Prabhasha😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+94702288014'] //Owner number in aive msg
global.premium = ['+94702288014'] //Owner Number info
global.ownernomer = '+94702288014' //Owner Number <<<

global.ownername = '🇱🇰⚓️SL Naviya👨‍💻' //Owner Name
global.botname = '🇱🇰⚓️SLNaviya༒Bot🤖࿐' //Bot Name

global.button = '☰ YouTube ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://youtube.com/channel/UCThAlYu0dIpFa0Zx7OoT-hw' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '🇱🇰⚓️SLNaviya༒Bot࿐' //Bot Pacage Name
global.author = '😎Mr.Dula❯❯' //Author Name
global.prefa = ['#','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = '©SL-Naviya™️' //In list menu
global.chatbotpre = 'false'  // Chat bot true/false

global.ig = 'https://github.com/SLNaviya' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'වැඩේ හරි ✅',
    admin: 'ඇඩ්මින්වරුන් සඳහා පමණි!😉',
    botAdmin: 'Bot ට ඇඩ්මින් කෙනෙක් වෙන්න ඕනි😥',
    owner: 'ඇඩ්මින්වරුන් සඳහා පමණි!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...⏳️',
    error: '🚫Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./DragonMedia/image/red-_-dragon-kumuthu.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
