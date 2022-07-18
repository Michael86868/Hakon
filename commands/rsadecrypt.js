const JSEncrypt = require('node-jsencrypt');
const crypt = new JSEncrypt();

module.exports = {
    name: `dec`,
    description: `For example, type "!dec hash" and the text will be decrypted!`,
    viewiable: true,
    execute(message, args, Embed, privateKey){
        crypt.setPrivateKey(privateKey);
        Embed
            .addFields(
                {
                    name: 'Decrypt Text',
                    value: `${crypt.decrypt(args)}`,
                    inline: false,
                }
            )
        message.channel.send(Embed);
    }
}