const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});
client.on("message", (message) => {
  if (message.body === "hello") {
    message.reply("Hiiiii");
  }
  if (message.body === "hola") {
    message.reply("holaaa como estas");
  }
});
