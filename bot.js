const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
    var s = ['603202488413323265','603202488413323265','603202488413323265'];
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/itsfakehehe',
    name: 'Minecraft',
    application_id: '595584836266229760',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login("NTkxODYyMjM4MjY1MjEyOTI4.XQ282g.OKtif5mXe91CtydXsA9ls500M1Q");
