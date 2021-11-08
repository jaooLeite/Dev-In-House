const btn = document.querySelector('#send')
const h1 = document.querySelector('h1')
const data = new Date()
const anoAtual = Number(data.getFullYear())
const mesAtual = Number(data.getMonth())
const diaAtual = Number(data.getDay())

function calcular(e) {
  //previne que o formulário seja enviado
  e.preventDefault()

  //pega a data selecionada pelo usuário
  const date = document.querySelector('#data').value

  //pega as datas
  let ano = Number(date.substring(0, 4))
  let month = Number(date.substring(6, 7))
  let day = Number(date.substring(8, date.length))

  //imprime na tela
  h1.innerText = (`Você tem: ${anoAtual - ano} anos ${mesAtual - month} meses e
   ${Math.abs(diaAtual - day)} dias`)
}

btn.addEventListener('click', calcular)


