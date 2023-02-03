const { usuarios, perfis } = require('../mocks/db')

module.exports = {
  ola() {
    return 'Basta retornar uma string'
  },
  horaAtual() {
    return `${new Date}`
  },
  usuarioLogado(obj) {
    console.log(obj)
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
  },
  produtoEmDestaque() {
    return {
      nome: 'Notebook Gamer',
      preco: 4890.89,
      desconto: 0.5
    }
  },
  numerosMegaSena() {
    // return [4, 8, 13, 27, 33, 54]
    const crescente = (a, b) => a - b
    return Array(6).fill(0)
      .map(() => parseInt(Math.random() * 60 + 1))
      .sort(crescente)
  },
  usuarios() {
    return usuarios
  },
  usuario(_, { id }) {
    const sels = usuarios
      .filter(u => u.id === id)
    return sels ? sels[0] : null
  },
  perfis() {
    return perfis
  },
  perfil(_, { id }) {
    const sels = perfis
      .filter(p => p.id === id)
    return sels ? sels[0] : null
  }
}