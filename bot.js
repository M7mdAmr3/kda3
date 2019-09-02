const Discord = require('discord.js')
const AhmedSniper = new Discord.Client();


AhmedSniper.on('ready', function(){
 console.log(`Logged in as ${AhmedSniper.user.tag}!`);
    
   // var s = ['483063515981283354','483063446376677386','483063378726879232','483063354332545045','483063463179190293'];
   var s = ['483055660209012736','480169573530861578','483055655800930315'];
    setInterval(function (){
    AhmedSniper.user.setPresence({
 game: { 
    type: 1, // Ahmed Sniper
    name: 'playing test', 
   state: `test`,
    url: 'https://www.twitch.tv/01010948769',
   details: 'testin',
    application_id: '477187715658547201',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`,
        large_text: `test )` ,
       
    }
  }
    });
    }, 1000); 
});










token.login("NTI3MDA2NDUxMjY5MzY5ODc3.XWiVog.TaCrTK0Wm5AjM-2kj7-uLYhaquY");
