const Discord = require('discord.js')
const client = new Discord.Client();
client.on('ready', function(){
 console.log(`Logged in as ${client.user.tag}!`);
    
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
    var s = ['515797843198476289','515797696758546432','515797725334470656'];
    setInterval(function (){
    client.user.setPresence({
 game: { 
    type: 1,
     url: 'https://www.twitch.tv/kosomkqmdhhh3',
    name: 'K/DA ! !',
    application_id: '506847796687536143',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
  
    }
  }
    });
    }, 5000);
});
client.login("NDAxNDE2Mzg0MjE2Njk0Nzg1.DtpUpQ.TsHAQBrrW2P6ClRkP7e1iTnHk-c");