module.exports = {
    name: `pri`,
    description: `Type "!pri" and private key will be displayed!`,
    viewiable: true,
    execute(message, args, Embed, privateKey){
        Embed
            .addFields(
                {
                    name: `Private Key - GET`,
                    value: `-----BEGIN PRIVATE KEY-----\n ${privateKey} \n-----END PRIVATE KEY-----`,
                    inline: false,
                }
            );
        message.channel.send(Embed);
    }
}