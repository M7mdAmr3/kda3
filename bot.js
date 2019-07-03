const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
    var s = ['595982502846529536','595982501265276938','595982507489361931'];
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/itsfakehehe',
    name: 'K/DA ! !',
    application_id: '595981556963737611',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login("NTI3MDA2NDUxMjY5MzY5ODc3.XPot-w.2eH3JUZy3JNpQfoUaggbA1sFYGU");
