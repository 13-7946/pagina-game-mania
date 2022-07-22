$(document).ready(function(){
    let slideAtual = 1
    let listaSlides = ["banner-a1", "banner-a2","banner-a3"]

    setInterval (mudarSlide, 2000)

    function mudarSlide() {

        // remover slide anterior
        if (slideAtual > 0) {

        $("#carrossel").removeClass(listaSlides[slideAtual-1])

        }else{

            $("#carrossel").removeClass(listaSlides[listaSlides.length-1])
            
        }

        //exibir slide atual 
        $("#carrossel").addClass(listaSlides[slideAtual])

        //indicar qual slide atual
        slideAtual++

        if (slideAtual > 2) {
            slideAtual = 0
        }
    }


})


function cadastrarnewsletter(){
    let email = document.getElementById("campo-email").value
    console.log(email)
}
function mostrarMenu(){
   // identificar elemento menu//
let menu = document.getElementById("menu")

if(getComputedStyle(menu).display == "none"){
    menu.style.display = "flex"
} else{
    menu.style.display = "none"
}

   //mudar visualização//
}