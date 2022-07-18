IF EXIST rsa_512_priv.txt (
    del rsa_512_priv.txt
) 
IF EXIST rsa_512_pub.txt (
    del rsa_512_pub.txt
) 

openssl genrsa -out "rsa_512_priv.pem" 512
openssl rsa -pubout -in "rsa_512_priv.pem" -out "rsa_512_pub.pem"

rename *.pem *.txt

exit