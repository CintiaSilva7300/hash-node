import { createHash } from 'crypto'

function criaHash(senha) {
    return createHash('sha256').update(senha).digest('hex')

}

console.log(criaHash("Uma String Qualquer"))

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = criaHash(senha)
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === criaHash(senha)) {
            console.log('Usuario autenticado')
            return true;
        }
        console.log('Usuario ou senha incorretos')
        return false;
    }
}

const usuario = new Usuario('cintia', 'senha')
console.log(usuario)

//caso de sucesso
usuario.autentica('cintia', 'senha')