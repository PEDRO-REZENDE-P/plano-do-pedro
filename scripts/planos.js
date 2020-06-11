    
    var cozinha = $(".cozinha")
    var sala = $(".sala")
    var dentro = $(".dentro")
    var url_atual = window.location.href

    cozinha.click(() => {
        window.open("main.html#cozinha", "_self")
        

    })

    sala.click(()=>{
        window.open("main.html#sala", "_self")
    })

    dentro.click(()=>{
        window.open("main.html#dentro", "_self")
    })


    
    if( url_atual == `https://pedro-rezende-p.github.io/plano-do-pedro/main.html#cozinha`){
        $(".entrada-cozinha").fadeToggle(2000)
        
        
    }else if(url_atual == `https://pedro-rezende-p.github.io/plano-do-pedro/main.html#sala`){
        $(".entrada-sala").fadeToggle(2000)

    }else if(url_atual == `https://pedro-rezende-p.github.io/plano-do-pedro/main.html#dentro`){
        $(".entrada-dentro").fadeToggle(2000)

    }

    console.log(url_atual);
    


    
    



        
    
    


    
