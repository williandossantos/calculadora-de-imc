

import {Modal} from "./modal.js"
import {AlertError} from "./alert-error.js"
import {calculoIMC, naoENumero} from "./utils.js"

let btnCalcular = document.querySelector(".btn-calcular")
let inputAltura = document.querySelector("#altura")
let inputPeso = document.querySelector("#peso")

btnCalcular.addEventListener("click", (e) =>{
   e.preventDefault()
   let peso = Number(inputPeso.value)
   let altura = Number(inputAltura.value)
   
   let pesoOualturaNaoENumero = naoENumero(peso) || naoENumero(altura)
   if(pesoOualturaNaoENumero){
      AlertError.abrir()
      return
   }
   if(camposInput.focus){
      AlertError.fechar()
   }
   
   
   let resultado = calculoIMC(peso, altura)
   displayMostreResultado(resultado)
   
   inputPeso.value = ""
   inputAltura.value = ""
})

let displayMostreResultado = (resultado) => {
   let mensagem = `Seu peso é ${resultado}`
   Modal.mensagem.innerText = mensagem
   Modal.abrir()
}

// oninput
/*
sempre verifica se o input esta sendo alterado.
se estiver sendo alterado tira a mensagem error
*/
inputPeso.oninput = () => AlertError.fechar()
inputAltura.oninput = () => AlertError.fechar()
