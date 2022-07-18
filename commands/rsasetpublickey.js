module.exports = {
    name: `setpub`,
    description: `type "!setpub key" and public key will be set!`,
    viewiable: true,
    execute(message, args, Embed, configs){
        const fs = require('fs');

        configs["publicKey"] = args;
        const json = JSON.stringify(configs);
        fs.writeFile("./config.json",json,(err) => {
            if(err){
                console.log(err);
            }
        });
        Embed
            .addFields(
                {
                    name: `Public Key - SET`,
                    value: `Public key was successfully set`,
                    inline: false,
                }
            );
        message.channel.send(Embed);
        
    }
}