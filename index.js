const { Client, GatewayIntentBits } = require("discord.js");

const token = process.env.TOKEN;

if (!token) {
  console.error("TOKEN is missing. Add TOKEN in Railway Variables.");
  process.exit(1);
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

client.once("clientReady", () => {
  console.log(`MonkeyCore Notify is online as ${client.user.tag}`);
});

client.login(token);