const JSEncrypt = require('node-jsencrypt');
const crypt = new JSEncrypt();

module.exports = {
    name: `enc`,
    description: `For example, type "!enc viyn" and the text will be encrypted!`,
    viewiable: true,
    execute(message, args, Embed, publicKey){
        crypt.setPublicKey(publicKey);
        Embed
            .addFields(
                {
                    name: 'Crypt Text',
                    value: `${crypt.encrypt(args)}`,
                    inline: false,
                }
            )
        message.channel.send(Embed);
    }
}