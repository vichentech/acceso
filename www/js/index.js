/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
*/

var archivo="DatosEG.shtm";
var origenDatos="android";
var ipEstacion = "http://ebalmazan2.pimer.es"; 

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        //alert("Initializing");
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        

    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        
        
        alert("Equipo Listo");
        
        app.receivedEvent('deviceready');
        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
    

};

$(document).ready(function(){
        
    $("#btnAcceso").on("click",conectar);
    $("#btnSalir").on("click",function(){
        console.log("Saliendo de la Aplicacion");
        alert("Salir de la Aplicación");
        });

});

// Conexion con Estacion
function conectar(){
    var $estacion=$('#estacion');
    var $user = $('#usuario');
    var $pass = $('#password');
    if ($estacion.val()!=""){
        ipEstacion=$estacion.val();
    }
    console.log("Intentando conectar con " + ipEstacion + " con usuario: " + $user.val() + " | password: " + $pass.val());
  
    DatosEG(archivo);

}
    
// Definir Origen de recuperacion de datos
function DatosEG(fuente){
        
    if (origenDatos=="local"){
        pideDatosJSON("local_" + fuente,"procesaDatosEG");
    }else if(origenDatos=='remoto'){
        pideDatosJSON(fuente, "procesaDatosEG");
    }else{
        pideDatosJSONP(ipEstacion + "/usr/jsonp_"+  fuente,"procesaDatosEG");
    }     
}    
    

function procesaDatosEG(datos){
    
    var fecha = datos.Fecha[2] + "/" + datos.Fecha[1] + "/" +datos.Fecha[0] + " " + datos.Fecha[3] + ":" + datos.Fecha[4] + ":" + datos.Fecha[5];
    $("#datos").html("Fecha: " + fecha);    
}   
    

    
