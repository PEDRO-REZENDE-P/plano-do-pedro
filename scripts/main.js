$("#send").click(autenticar)
var url_atul = window.location.href

const name = "Pedro"
const pass = "123456"

function autenticar(){
    var nome = $("#nome")
    var senha = $("#senha")
    
    if(nome.val() == name && senha.val() == pass){
        window.open("https://pedro-rezende-p.github.io/plano-do-pedro/planos.html", "_self");
    }else{
        mensagemErro();
    }    
    
}

function mensagemErro(){
    var err = $('.msn-err'), btnErr = $('.btn-err')

    err.slideDown()

    setInterval(() => {
        err.slideUp()
    }, 7000)

    btnErr.click(() => {
        err.slideUp()
    })
}