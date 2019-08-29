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
    name: 'playing test', //Ahmed Sniper
   state: `test`,
    url: 'https://www.twitch.tv/01010948769', // Ahmed Sniper
   details: 'testin',
    application_id: '477187715658547201',
     assets: {
         large_image:   `${s[Math.floor(Math.random() * s.length)]}`, //Ahmed Sniper
        large_text: `test )` , //Ahmed Sniper
       
    }
  }
    });
    }, 1000); //Ahmed Sniper هنيكك لو غيرت حاجة فى اسمى 
});











//نهايت الكود الى من صنع : AhmedSniper

AhmedSniper.login('NTI3MDA2NDUxMjY5MzY5ODc3.XWgCUA.gg-Dy7KWvgZE_6K-OutksVXxL4k'); //حط هنا التوكن Ahmed Sniper
