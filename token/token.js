import Jwt from "jsonwebtoken";

const chaveSecreta = "chaveSuperSecreta"

const token = Jwt.sign(
    {
        apelido: 'jm',
        curso: 'segurança '
    }, chaveSecreta
)

console.log(token)

const tokenDecodificado = Jwt.verify(token, chaveSecreta)
console.log(tokenDecodificado)