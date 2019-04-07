
var calculadora={
    //declaracion de variables
 display: document.getElementById("display"),
 on : document.getElementById("on"),
 sign : document.getElementById("sign"),
 raiz : document.getElementById("raiz"),
 dividido : document.getElementById("dividido"),
 siete : document.getElementById("7"),
 ocho : document.getElementById("8"),
 nueve : document.getElementById("9"),
 por : document.getElementById("por"),
 cuatro : document.getElementById("4"),
 cinco : document.getElementById("5"),
 seis : document.getElementById("6"),
 menos : document.getElementById("menos"),
 uno : document.getElementById("1"),
 dos : document.getElementById("2"),
 tres : document.getElementById("3"),
 cero : document.getElementById("0"),
 punto : document.getElementById("punto"),
 igual : document.getElementById("igual"),
 mas : document.getElementById("mas"),
     
 init:function(){    //con el metodo init le doy inicio a mis funciones 
    this.uno.addEventListener('click',function(){    //eventos listener para mostrar mis numeros en pantalla 
    display.textContent += "1";
    
    })
    this.dos.addEventListener('click',function(){
    display.textContent += "2";
        
    })
    this.tres.addEventListener('click',function(){
    display.textContent += "3";
            
    })
    this.cuatro.addEventListener('click',function(){
    display.textContent += "4";
                
    })

    this.cinco.addEventListener('click',function(){
    display.textContent += "5";
        
    })
    this.seis.addEventListener('click',function(){
    display.textContent += "6";
                    
    })
    this.siete.addEventListener('click',function(){
    display.textContent += "7";
                        
    })
        
    this.ocho.addEventListener('click',function(){
    display.textContent += "8";
                
    })

    this.nueve.addEventListener('click',function(){
    display.textContent += "9";
                    
    })
    this.cero.addEventListener('click',function(){
            display.textContent += "0";
                        
    })
    this.on.addEventListener('click',function(){
    display.textContent = "0";
                                
    })       

    this.mas.addEventListener('click',function(){
    display.textContent += "+";
                    
    })
    }

    


}

calculadora.init();






