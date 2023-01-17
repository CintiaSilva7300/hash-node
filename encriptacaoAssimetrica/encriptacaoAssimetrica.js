import { generateKeyPairSync } from 'crypto';

const { privatekey, publickey } = generateKeyPairSync
    ('rsa', {
        modulusLength: 2048,

        publickeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privatekeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    })

console.log(publickey)
console.log(privatekey)

import { publicEncrypt, privateEncrypt } from 'crypto';

const dadosCriptografados = publicEncrypt(
    publickey,
    Buffer.from('mensagem secreta!')
)
console.log(dadosCriptografados.toString('hex'))