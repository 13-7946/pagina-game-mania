//alert("Essa mensageme dojava")
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