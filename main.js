const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const { Message } = require("discord.js");
const config = require('./config.json');
require('dotenv').config();

client.commands = new Discord.Collection();

const descriptions = [];
const names = [];
const arrayCommands = [];

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
        
    if(command.viewiable === true){
        names.push(command.name);
        descriptions.push(command.description);
    }

}

arrayCommands.push(names,descriptions);

 
client.once('ready', () => {
    console.log('Hakon je nyní online !');
});

client.on('message', message => {
    let greetings = ["gn","hi","dobrou","dobré","ahoj","čus","čest","čau","cc","zduř","cus","cau","cest"];
    let emojis = [..."😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤧😷🤒🤕🤠😈👿👹👺👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾"];
    const Embed = createEmbed();
    let configs = JSON.parse(fs.readFileSync("./config.json"));
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const param = ArrayToString(args, ' ',0);

    switch (command.toLowerCase()) {
        case 'choose':
            client.commands.get('choose').execute(message, param, Embed);
            break;
        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        default:
            for(let index = 0;index<greetings.length;index++){
                if(command.toLowerCase().includes(greetings[index])){
                    message.channel.send(`${greetings[Math.floor(Math.random()*greetings.length)]} ${emojis[Math.floor(Math.random()*emojis.length)]}`);
                    return 0;
                }
            }
            message.channel.send(`Příkaz ** ${command} ** neexistuje !`);
            break;
    }

    function createEmbed(){
        const Embed = new Discord.MessageEmbed();
            Embed
                .setColor('#066FE0')
                .setAuthor('Hakon - Asymmetric Cryptography', 'https://i.imgur.com/raOAeCD.png', 'https://github.com/Michael86868/Hakon')
                .setTimestamp()
                .setFooter('Made by Michael86868 on GitHub', 'https://i.imgur.com/raOAeCD.png');
        return Embed;
    }

    function ArrayToString(pole, limiter, start) {
        var newString;
        for (let i = start; i < pole.length; i++) {
            if (i === start)
                newString = pole[i];
            else if (i > start)
                newString += limiter + pole[i];
        }
        return newString;
    }
});


client.login(process.env.TOKEN);