const settings = require('./config.json');
const open = require('open');
const Discord = require("discord.js-selfbot");
const client = new Discord.Client()
client.on('ready', () => {console.log(`Logged in as ${client.user.tag}`);});

client.on('message', msg => {
  var pattern = "(https:)\/\/(.*?)\.(hyper.co\/purchase\/)(.*?)\?(password)\=(.*)"
  var msg = msg.content
  if(msg.match(pattern))
    var url = msg.match(pattern)[0]
    open(url);});
client.login(settings.token);



//create a settings.json with your token