const {exec} = require("child_process");

module.exports = {
    name: `gen`,
    description: `Type "!gen" and a new pair of RSA keys will be generated!`,
    viewiable: true,
    execute(message,args,Embed,fs,configs){
        exec('generate.bat', (error) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
        });
        
        let public = fs.readFileSync('./GenerationKeys/rsa_512_pub.txt').toString().replace("-----BEGIN PUBLIC KEY-----","").replace("-----END PUBLIC KEY-----","").replace(/(\r\n|\n|\r)/gm, "");
        let private = fs.readFileSync('./GenerationKeys/rsa_512_priv.txt').toString().replace("-----BEGIN RSA PRIVATE KEY-----","").replace("-----END RSA PRIVATE KEY-----","").replace(/(\r\n|\n|\r)/gm, "");

        configs["privateKey"] = private;
        configs["publicKey"] = public;

        const json = JSON.stringify(configs);
        
        fs.writeFile("./config.json",json,(err) => {
            if(err){
                console.log(err);
            }
        });
        

        Embed
            .addFields(
                {
                    name: `Generation key pair`,
                    value: `the key generation was successful`,
                    inline: false,
                }
            );
        message.channel.send(Embed);
    }
}