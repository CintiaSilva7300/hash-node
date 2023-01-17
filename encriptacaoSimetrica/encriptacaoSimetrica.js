import { createCipheriv, randomBytes, createDecipheriv } from 'crypto';

const mensagem = 'Demosntraçao do curso';
const chave = randomBytes(32);
const vi = randomBytes(16);

const cifra = createCipheriv('aes256', chave, vi);

const mensagemCifrada = cifra.update(mensagem, 'utf-8', 'hex') + cifra.final('hex');

console.log(mensagemCifrada);

//trasmissao  -------------------chave, vi, mensagem
//decifrar mensagem

const decifrar = createDecipheriv('aes256', chave, vi);

const mensagemDecifrada = decifrar.update(mensagemCifrada, 'hex', 'utf-8') + decifrar.final('utf-8');

console.log(`Decifrado: ${mensagemDecifrada.toString('utf-8')}`)