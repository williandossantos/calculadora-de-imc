
export const Modal = {
   wrapper: document.querySelector(".modal-wrapper"),
   mensagem: document.querySelector(".modal .titulo span"),
   fecharBotao: document.querySelector(".btn-fechar"),
   
   abrir(){
      Modal.wrapper.classList.add("open")
   },
   fechar(){
      Modal.wrapper.classList.remove("open")
   }
}

Modal.fecharBotao.addEventListener("click", () =>{
   Modal.fechar()
})


window.addEventListener("click", (e) =>{
   if(e.key === "Escape"){
      Modal.fechar()
   }
})





