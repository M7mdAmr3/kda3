const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
    var s = ['597720690061344768','597720697216958464','597720682394025984'];
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/itsfakehehe'
    details: 'I hope to die'
    state:'And will be SAD Forever' ,
    name: 'I`m ALWAYS SAD...',
    application_id: '595981556963737611',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login("NTI3MDA2NDUxMjY5MzY5ODc3.XPot-w.2eH3JUZy3JNpQfoUaggbA1sFYGU");
