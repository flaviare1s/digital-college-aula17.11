import './style.css'

const usuarios = [{
  nome: 'Maria',
  idade: 22,
  profissao: 'estudante',
},
{
  nome: 'José',
  idade: 25,
  profissao: 'estudante',
},
{
  nome: 'João',
  idade: 33,
  profissao: 'veterinário',
}]

// MAP:
const profissoes = usuarios.map((item) => (item.profissao))
console.log(profissoes)

// FILTER:
const estudantes = usuarios.filter((estudante) => estudante.profissao === 'estudante')
console.log(estudantes)

// REDUCE:
const somaIdades = usuarios.reduce((acc, usuarios) => {
  return acc + usuarios.idade
},0)
const mediaIdades = somaIdades / usuarios.length
console.log(mediaIdades)



function dadoPessoais (nome, idade, sexo) {
  alert(`Meu nome é ${nome}, tenho ${idade} anos de idade e sou do sexo ${sexo}.`)
}
dadoPessoais('Flávia', 40, 'feminino')