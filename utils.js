

export let naoENumero = (valor) => {
   return isNaN(valor) || valor == ""
}
 
export const calculoIMC = (peso, altura) => {
   return (peso / ((altura / 100) ** 2)).toFixed(2)
}

