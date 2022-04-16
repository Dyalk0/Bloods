const { Client, Intents, MessageEmbed, DiscordAPIError } = require('discord.js');
const { token } =require('./config.json');
const Discord = require('discord.js');

const client = new Client({intents: new Intents(32767)});
const prefix = '&';

client.once('ready', async => {
    console.log('Bot activé !')
    client.user.setActivity({type: 'PLAYING', name: 'Se fait développer'})
    client.user.setStatus('online')
})

client.on('messageCreate', message => {
    if(message.content.startsWith(prefix + 'ping')){

    const embed = new Discord.MessageEmbed()
    .setTitle("Se connecter à l'Oasis")
    .setColor('ff6600')
    .setDescription("━━━━━━━━━━━━━━━━━━━━━━━━━━━\nBonjour/bonsoir, pour vous connecter à l'Oasis, cela est très simple. Il suffit juste de suivre le model ci dessous :\n━━━━━━━━━━━━━━━━━━━━━━━━━━━ \n\n**Prénom Nom | ID\n\nExemple : Bellamy Hopper | 22065**\n\n(il faut accepter le règlement dans <#959939352828465172>.)")
    .setThumbnail('https://i.imgur.com/qBf2OLx.png')
    .setFooter({ text: 'Bot Oasis | Aide', iconURL: 'https://i.imgur.com/qBf2OLx.png' });

    message.channel.send({embeds: [embed]})

}})

//Bienvenue################################################################################

client.on("guildMemberAdd", async member => {
    console.log("Un membre est arrivé sur le serveur");
    client.channels.cache.get("963209263688327193").send("<@" + member.id + "> est v");
    member.roles.add("964618426104578178");

    var canvas = Canvas.createCanvas(1024, 500);

    ctx = canvas.getContext("2d");

    var background = await Canvas.loadImage("./background.png");
    ctx.drawImage(background, 0, 0, 1024, 500);

    ctx.font = "42px Impact";
    ctx.filleStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(member.user.tag.toUpperCase(), 512, 418);

    ctx.beginPath();
    ctx.arc(512, 166, 119, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    var avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "png",
        size: 1024
    }));

    ctx.drawImage(avatar, 393, 47, 238, 238)

    var attachment = new Discord.MessageAttachment(canvas.toBuffer(), "welcome.png");

    client.channels.cache.get("963209263688327193").send({files: [attachment]});
});

const Canvas = require("canvas")

//############################################## Règlement

client.on('messageCreate', message => {
    if(message.content.startsWith(prefix + 'regle')){

    const embed = new Discord.MessageEmbed()
    .setTitle("Règlement de l'Oasis")
    .setColor('ff6600')
    .setDescription("**Bonjour/Bonsoir, voici le règlement de l'Oasis. Merci de bien le respecter !**\n\n__**Général :**__\n\n- Les insultes ne sont pas autorisé !\n- Le spam de majuscule, gifs etc... ne sont pas autorisé.\n- Les photos à caractère pornographiques, illégal sont interdite.\n- La vente de drogues / d'armes / illégal sont STRICTEMENT pas autorisé.\n- Le racisme n'est pas autorisé.\n- Les annonces troll sont interdite.\n\n__**Tinder :**__\n\n- Les annonces troll sont interdite\n- Les -18 ans n'ont pas le droit de s'inscrire sur tinder\n\n")
    .setThumbnail('https://i.imgur.com/qBf2OLx.png')
    .setFooter({ text: 'Bot Oasis | Règlement', iconURL: 'https://i.imgur.com/qBf2OLx.png' });

    message.channel.send({embeds: [embed]})

}})

client.on('messageCreate', message => {
    if(message.content.startsWith(prefix + 'regle')){

    const embed = new Discord.MessageEmbed()
    .setTitle("Règlement de l'Oasis")
    .setColor('ff6600')
    .setDescription("**Bonjour/Bonsoir, si vous voulez avoir des grades comme @Concessionnaire, @Boîte de nuit etc... Veuillez suivre la demande juste ici :\n\n**Nom Prénom :**\n**Métier :**\n**Nom de l'entreprise :**\n__(Les employés des entreprises ne peuvent pas avoir les rôles de @Concessionnaire, @Boîte de nuit  etc...)__")
    .setThumbnail('https://i.imgur.com/qBf2OLx.png')
    .setFooter({ text: 'Bot Oasis | Règlement', iconURL: 'https://i.imgur.com/qBf2OLx.png' });

    message.channel.send({embeds: [embed]})

}})

client.login('OTYxMjAyMTQwMzUxNzI1NjA4.Yk1jQA.PZmCX6Ap9Z9SPYOhgkLV6zBnddM');