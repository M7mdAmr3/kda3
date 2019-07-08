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
     url: 'https://www.twitch.tv/itsfakehehe',
    name: 'I`m ALWAYS SAD...',
    details: 'test'
    state: 'test'
    application_id: '597714548157448192',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login("NDQ2MTIzOTE5MDIwMTMwMzA1.XRw48A.eNZB9B6tb-bv1-jTh8JEGwLp-Zo");
