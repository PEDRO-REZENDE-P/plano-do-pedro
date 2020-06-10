$("#send").click(autenticar)

const name = "Pedro"
const pass = "1234"

function autenticar(){
    var nome = $("#nome")
    var senha = $("#senha")

    console.log(nome, senha);
    
    if(nome.val() == name && senha.val() == pass){
        window.open("../planos.html", "_self");
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