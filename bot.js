const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

const prefix = '-';

bot.on("message", async message => {

  message.content.toLowerCase;
  
  if (message.author.bot) return;
  msg = message.content.toLowerCase();
 
  if(msg.startWith(prefix + "leetcode" )){
    
  }
  
  
  if(msg.startWith(prefix + "laicode" )){
    message.channel.send("https://code.laioffer.com/ui/#/app/problem/");
  }
  
  
  
  
  if (message.channel.type === "dm") return;


  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }

  
  
  if (cmd === `${prefix}ping`){
    message.channel.send("Pong!");
  }
});

bot.login(process.env.token);
