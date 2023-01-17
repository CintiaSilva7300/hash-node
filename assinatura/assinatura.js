import { generateKeyPairSync, createSign, createVerify } from 'crypto';

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
    }
    )

let dados = "Essa string vai ser assinada!"

//assinatura

const assinador = createSign('rsa-sha256');

assinador.update(dados);

const assinatura = assinador.sign(privatekey, 'hex')

console.log(`Assinatura: ${assinatura}`)