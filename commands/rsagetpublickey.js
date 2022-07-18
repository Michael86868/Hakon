module.exports = {
    name: `pub`,
    description: `Type "!pub" and public key will be displayed!`,
    viewiable: true,
    execute(message, args, Embed, publicKey){
        Embed
        .addFields(
            {
                name: `Public Key - GET`,
                value: `-----BEGIN PUBLIC KEY-----\n ${publicKey} \n-----END PUBLIC KEY-----`,
                inline: false,
            }
        );
        message.channel.send(Embed);
    }
}