// ----------------AJAX --------------
var handlemsgcomms = null;

// Pide datos JSON, 'archivo' es la pagina de Datos que pedimos y 'funcion' es la Pagina sobre la que van los datos
function pideDatosJSON(archivo,funcion)
{
    //alert("archivo:" + archivo + ", funcion." + funcion);
    $.ajax({
        url: archivo,
        timeout: '10000',
        dataType: 'json'
    }).done(function (msg)
    {
        //alert("Ok en Ajax");
        eval(funcion + "(msg);");
        console.log(msg);
    }).fail(function (msg,xrh,status)
    {
        console.log("Error en Ajax json"); 
        console.log(xrh);
        console.log("Status: " + status);

    }).always(function (msg)
    {
        console.log("Proceso de intercambio de Datos Finalizado:");
        console.log(msg);
    });
}
  
// Pide datos JSONP, 'archivo' es la pagina de Datos que pedimos y func es la Pagina sobre la que van los datos
function pideDatosJSONP(archivo,funcion){
    //alert("Peticion datos Jsonp");
    $.ajax({
        url: archivo,
        type:'GET', 
        timeout: '10000',
        dataType: 'jsonp',
        beforeSend:function(){
            console.log("Accediendo a " + archivo);
        }
    }).done(function(msg)
    {
        //alert("Ok en Ajax");
        eval(funcion + "(msg);");
        console.log(msg);
           
    }).fail(function (msg)
    {
        console.log("Error en Lectura de Datos Jsonp");

    }).then(function()
    {
        console.log("Proceso de intercambio de Datos Finalizado");
    });
}


