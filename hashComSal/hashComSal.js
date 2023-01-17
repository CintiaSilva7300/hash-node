import { scryptSync, randomBytes, timingSafeEqual } from "crypto";

function criaHashComSal(senha) {
    const sal = randomBytes(16).toString('hex');

    const senhaHashada = scryptSync(senha, sal, 64).toString('hex');

    return `${sal}:${senhaHashada}`
}

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        [this.sal, this.hash] = criaHashComSal(senha).split(':')
    }
    autentica(nome, senha) {
        if (nome === this.nome) {
            const testeHash = scryptSync(senha, this.sal, 64);
            const hashReal = Buffer.from(this.hash, 'hex');

            const hashesCorrespondem = timingSafeEqual(testeHash, hashReal);

            if (hashesCorrespondem) {
                console.log("Usuario autenticado com sucesso")
                return true;
            }
        }
        console.log('Usuario ou senha incorretos')
        return false;
    }
}

const jm = new Usuario('Joao Manoel', 'senhaSecreta')

console.log(jm)

//teste sucesso
jm.autentica('Joao Manoel', 'senhaSecreta')

//teste error
jm.autentica('Joao oo', 'senhaSecreta')
jm.autentica('Joao Manoel', 'p')