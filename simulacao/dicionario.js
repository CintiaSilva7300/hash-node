import { createHash } from 'crypto'

class Usuario {
    constructor(nome, senha) {
        this.nome = nome;
        this.hash = this.criaHash(senha)
    }

    criaHash(senha) {
        return createHash('sha256').update(senha).digest('hex')
    }
    autentica(nome, senha) {
        if (nome === this.nome && this.hash === this.criaHash(senha)) {
            console.log('Usuario autenticado')
            return true;
        }
        // console.log('Usuario ou senha incorretos')
        return false;
    }
}

const usuario = new Usuario('cintia', 'senhaqualquer')

const senhasComuns = ["senha", "test123", "bcsau3547", "senha123456"]

senhasComuns.map(senha => {
    if (usuario.autentica("cintia", senha)) {
        console.log(`A senha do usuario é ${senha}`)
    }
})