const Discord = require('discord.js-selfbot-v13');
const { Client } = require('discord.js-selfbot-v13');

const client = new Client({
  checkUpdate: false
});

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - Online Mode activated`);
});

client.login(process.env.TOKEN);
const http = require("http");
http.createServer((_, res) => res.end("You Are Online")).listen(8080);
