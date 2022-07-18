const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();
const { Message } = require("discord.js");
const config = require('./config.json');
require('dotenv').config();

 
client.once('ready', () => {
    console.log('Hakon je nyní online !');
});

client.on('message', message => {
    let greetings = ["gn","hi","dobrou","dobré","ahoj","čus","čest","čau","cc","zduř","cus","cau","cest"];
    let emojis = [..."😀😃😄😁😆😅😂🤣😊😇🙂🙃😉😌😍🥰😘😗😙😚😋😛😝😜🤪🤨🧐🤓😎🤩🥳😏😒😞😔😟😕🙁☹️😣😖😫😩🥺😢😭😤😠😡🤬🤯😳🥵🥶😱😨😰😥😓🤗🤔🤭🤫🤥😶😐😑😬🙄😯😦😧😮😲🥱😴🤤😪😵🤐🥴🤧😷🤒🤕🤠😈👿👹👺👻💀☠️👽👾🤖🎃😺😸😹😻😼😽🙀😿😾"];
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const param = ArrayToString(args, ' ',0);

    switch (command.toLowerCase()) {
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