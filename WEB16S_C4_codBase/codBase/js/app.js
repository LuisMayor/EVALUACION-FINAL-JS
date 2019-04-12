var operacion1;
var operacion2;
var operacion;
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
    numero(1);
    maxdisplay();

    })
    this.dos.addEventListener('click',function(){
    numero(2);


    })
    this.tres.addEventListener('click',function(){
    numero(3);


    })
    this.cuatro.addEventListener('click',function(){
    numero(4);

    })

    this.cinco.addEventListener('click',function(){
    numero(5);

    })
    this.seis.addEventListener('click',function(){
        numero(6);

    })
    this.siete.addEventListener('click',function(){
        numero(7);

    })

    this.ocho.addEventListener('click',function(){
        numero(8);

    })

    this.nueve.addEventListener('click',function(){
        numero(9);

    })
    this.cero.addEventListener('click',function(){
           numero(0);

    })
    this.on.addEventListener('click',function(){
    display.textContent = "0";

    })

    this.punto.addEventListener('click',function(){
    display.textContent += ".";

    })



    this.mas.addEventListener('click', function(){
         operacion1 =  display.textContent;
         operacion = "+";
        limpiar();


    })

    this.menos.addEventListener('click', function(){
        operacion1 =  display.textContent;
        operacion = "-";
       limpiar();

   })

   this.por.addEventListener('click', function(){
    operacion1 =  display.textContent;
    operacion = "*";
   limpiar();

})
this.dividido.addEventListener('click', function(){
    operacion1 =  display.textContent;
    operacion = "/";
   limpiar();

})
this.igual.addEventListener('click', function (){
    operacion2 = display.textContent;
    resolver();
    
})

/*function maxdisplay(){
    if(display.textContent.length<=8){
        display.textContent = display.textContent;
    }else{
        display.textContent = display.textContent.;
    }
  }



function numero(n){
    if(display.innerHTML == 0){
    display.textContent = n;
    }
    else {
        display.textContent += n;
    }

}  */


function numero(n) {
    if (display.textContent.length <= 7) {
        if (display.innerHTML == 0) {
            display.textContent = n;
        } else {
            display.textContent += n;
        }
    }
}

    function limpiar(){
        display.textContent="";
    }
    function resetear(){
        display.textContent ="";
        operacion1 = "";
        operacion2 ="";
        operacion ="";
    }
        
    function resolver(){
        var res = 0;
        switch(operacion){
         case "+":
             res = parseFloat(operacion1)+ parseFloat(operacion2);
             break;
         case "-":
             res = parseFloat(operacion1) - parseFloat(operacion2);
             break;
         case "*":
             res = parseFloat(operacion1) * parseFloat(operacion2);
             break;
         case "/":
             res = parseFloat(operacion1) / parseFloat(operacion2);
             break;
         case "=":
             res = parseFloat(operacion2) + parseFloat(operacion2);
             break;
        }
        resetear();
        display.textContent = res;
    }


    

    }


}

calculadora.init();
