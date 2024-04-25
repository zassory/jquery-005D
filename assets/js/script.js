$("document").ready(function(){

    
    let numero1 = 0
    let numero2 = 0;
    let resultado = 0;

    $("#btnSumar").click(function(){
        
        
        $("#error1").text("");
        $("#error2").text("");
        $("#resultado").text("");

        numero1 = $("#numero1").val();

        if(numero1 === ""){
            $("#error1").text("Debe agregar el primer numero");
            $("#error1").css("color","red");
            return;
        }

        numero2 = $("#numero2").val();

        if(numero2 === ""){
            $("#error2").text("Debe agregar el segundo numero");
            $("#error2").css("color","red");
            return;                                                                                
        }

        resultado = parseInt(numero1) + parseInt(numero2);

        $("#resultado").text(resultado);
        limpiar();

    })
    


    function limpiar(){
        $("#numero1").val("");
        $("#numero2").val("");
    }

});


//let numero1 = document.getElementById("numero1").value;
//let btnSumar = document.getElementById("btnSumar");

// let btnSumar = document.getElementById("btnSumar");
    // btnSumar.addEventListener("click", ()=> {
    //     console.log("Hola mundo");
    // });

