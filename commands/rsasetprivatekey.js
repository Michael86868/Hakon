module.exports = {
    name: `setpri`,
    description: `type "!setpri key" and private key will be set!`,
    viewiable: true,
    execute(message, args, Embed, configs){
        const fs = require('fs');

        configs["privateKey"] = args;
        const json = JSON.stringify(configs);
        fs.writeFile("./config.json",json,(err) => {
            if(err){
                console.log(err);
            }
        });
        Embed
            .addFields(
                {
                    name: `Private Key - SET`,
                    value: `Private key was successfully set`,
                    inline: false,
                }
            );
        message.channel.send(Embed);
    }
}