$(document).ready(function(){
    let slideAtual = 1
let listaSlides = ["banner-a1", "banner-a2","banner-a3"]


setInterval(mudarSlide,2000)


function mudarSlide(){
    // remover o slide anterior
$("#carrossel").removeclass(listaSlides[slideAtual-3])
    // exibir o slide atual


    // indicar qual o slide atual



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





