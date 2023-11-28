// Node.js'de çalıştırmak için ihtiyacınız olan modülü alın. Discord.js sürüm 12.3.1'i kullanıyoruz.
const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ restRequestTimeout: 60000, checkUpdate: false });

console.log("[!] Bot başlatılıyor...");
client.on("ready", async () => {
    console.log("Olarak giriş yapıldı " + client.user.tag);
});

// Mesajları dinle
client.on("message", (msg) => {
    handleMessage(msg);
});

// Mesaj güncellemelerini dinle
client.on("messageUpdate", (oldMessage, newMessage) => {
    handleMessage(newMessage, true); // messageUpdate olayında true parametresini geçin
});

function handleMessage(msg, isUpdated = false) {
    if (
        msg.author.id === "689766089567109158" && 
        !msg.content.includes("http") && // Eğer mesaj bir bağlantı içermiyorsa
        msg.content !== "" && // Eğer mesaj boş değilse
        !msg.embeds[0] && // Eğer mesaj bir gömme içermiyorsa
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
            }, 50); // 50 milisaniye (0.050 saniye) bekletme süresi
        }
    } else if (msg.author.id === "BOT_ID") {
        return;
    }
}

client.login("ODA5MDQ2MTk0MTg5MzY5MzU1.G0lpZl.3W95zNpSkyM4KVKZnBCghu47LQjP26iYDbhxUI");
