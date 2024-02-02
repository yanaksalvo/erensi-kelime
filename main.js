const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ restRequestTimeout: 60000, checkUpdate: false });

console.log("[!] Bot başlatılıyor...");
client.on("ready", async () => {
    console.log("Olarak giriş yapıldı " + client.user.tag);
});

client.on("message", (msg) => {
    handleMessage(msg);
});


client.on("messageUpdate", (oldMessage, newMessage) => {
    handleMessage(newMessage, true); 
});

function handleMessage(msg, isUpdated = false) {
    if (
        msg.author.id === "689766089567109158" && 
        !msg.content.includes("http") && 
        msg.content !== "" && 
        !msg.embeds[0] && 
        msg.author.id !== "1177934461527146576"
    ) {
        if (isUpdated) {
            console.log("Güncellenmiş Mesaj: " + msg.content);
        } else {
            console.log("Mesaj: " + msg.content);
        }

        const regex = /`([^`]+)`/;
        const match = msg.content.match(regex);
        const kelime = match ? match[1] : null;

        if (kelime) {
            setTimeout(() => {
                msg.channel.send(kelime).catch((error) => {
                    console.log(error);
                });
            }, 50); 
        }
    } else if (msg.author.id === "BOT_ID") {
        return;
    }
}

client.login("");
