

export let AlertError = {
   elemento: document.querySelector(".alert-error"),
   abrir(){
      AlertError.elemento.classList.add("open")
   },
   fechar(){
      AlertError.elemento.classList.remove("open")
   }
}



