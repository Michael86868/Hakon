module.exports = {
    name: `log`,
    description: `Type "!log" and the public and private key will be displayed!`,
    viewiable: true,
    execute(message, args, Embed, publicKey, privateKey){
        Embed
        .addFields(
            {
                name: `Public Key`,
                value: `-----BEGIN PUBLIC KEY-----\n ${publicKey} \n-----END PUBLIC KEY-----`,
                inline: false,
            },
            {
                name: `Private Key`,
                value: `-----BEGIN PRIVATE KEY-----\n ${privateKey} \n-----END PRIVATE KEY-----`,
                inline: false,
            }
        );
        message.channel.send(Embed);
    }
}