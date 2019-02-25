define('modulo', ['jquery'], function ($) {

    var modulo = {
        //START

        //Private attributes
        _lista: {
            A: "Primer elemento",
            B: "Segundo elemento",
            C: "Tercer elemento",
            D: "Cuarto elemento",
            E: "Quinto elemento",
        },
        _MENSAJE: "Elemento enviado: ",

        //Public attributes

        //Public methods
        init: function () {
            const list = modulo._lista;
            console.log(list);

            $(document).ready(function () {
                console.log("holiiii");
                $("h1").addClass("title__page");
                $(".title__page").html("Selecciona un elemento de la lista");
                
                const articleEl = $(".article");
                articleEl.html("<select></select>").attr("class", "options").attr("name", "options").html;
                
                $.each(list, function (key, value) {
                    $('select')
                        .append($("<option></option>")
                            .attr("value", value)
                            .attr("class", key)
                            .text(value));
                });

                articleEl.append("<button>Enviar</button>").html;
            });

            function myFuncAlert(){
                const mesage = modulo._MENSAJE;
                if(!eventValue){
                    return alert(mesage + modulo._lista.A)
                }else{
                    return alert(mesage + eventValue);
                }
            }
            
            $(document).on('click', 'button', myFuncAlert);
            
            let eventValue;
            
            function selectedOption(e){
                eventValue = e.currentTarget.value;
                console.log(eventValue);

            }

            $(document).on("change", "select", selectedOption);

            //call to ready method

            //call to mockup method

            //call to addEvents method

        },

        //Private methods

        //END
    };
    modulo.init();
});