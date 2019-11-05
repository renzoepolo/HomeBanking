//Declaración de variables
var nombreUsuario = "Renzo";
var saldoCuenta = 5500;
var limiteExtraccion = 2000;
var agua = 350;
var luz = 425;
var telefono = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var pin = 1478;


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
};


//Funciones que tenes que completar
function validarEntrada(ingreso) {
    var chequeo = /^[0-9]+$/.test(ingreso);
    return chequeo
};

function sumaCuenta(num){
    saldoCuenta += num;
};

function restaCuenta(num){
    saldoCuenta -= num;
};

function saldoSuficiente(num) {
    return saldoCuenta-num<0
}

function cambiarLimiteDeExtraccion() {
    var ingreso = prompt("Ingrese el nuevo límite de extracción");
    var chequeo = validarEntrada(ingreso);
    if(chequeo){
        limiteExtraccion = parseInt(ingreso);
        actualizarLimiteEnPantalla();
        alert("Nuevo límite de extracción: $"+limiteExtraccion);
    }
    else {
        alert("Valor de ingreso incorrecto");
    }
    
};

function extraerDinero() {
    var egreso = prompt("Ingrese cantidad de dinero a extraer");
    var chequeo = validarEntrada(egreso);
    if(chequeo){
        egreso = parseInt(egreso);
        if(egreso>limiteExtraccion){
            alert("Límite de extracción superado");}
            else if(saldoSuficiente(egreso)){
                alert("Saldo insuficiente");}
                else if(egreso%100!==0){
                    alert("No es posible entregar ese monto");}
                    else {  var saldoAnterior = saldoCuenta;
                            restaCuenta(egreso);
                            actualizarSaldoEnPantalla();
                            alert(  "Has extraído: $"+egreso+"\n"+
                                    "Saldo anterior: $"+saldoAnterior+"\n"+
                                    "Saldo actual: $"+saldoCuenta);}
    }
    else {
        alert("Valor de ingreso incorrecto");
    }
};

function depositarDinero() {
    var ingreso = parseInt(prompt("Ingrese cantidad de dinero a depositar"));
    var chequeo = validarEntrada(ingreso);
    if(chequeo){
        ingreso = parseInt(ingreso);
        var saldoAnterior = saldoCuenta;
        sumaCuenta(ingreso);
        actualizarSaldoEnPantalla();
        alert(  "Has depositado: $"+ingreso+"\n"+
                "Saldo anterior: $"+saldoAnterior+"\n"+
                "Saldo actual: $"+saldoCuenta);
    }
    else {
        alert("Valor de ingreso incorrecto");
    }
};

function pagarServicio() {
    var opcion = prompt("Ingrese el numero que corresponda con el servicio a pagar:"+"\n"+
                                 "1 - Agua" + "\n"+
                                 "2 - Luz" + "\n"+
                                 "3 - Internet" + "\n"+
                                 "4 - Teléfono");
    var chequeo = validarEntrada(opcion);
        if(chequeo){
        opcion = parseInt(opcion);
        switch (opcion) {
            case 1:
                    if(saldoSuficiente(agua)){
                        alert("No es posible pagar este servicio. Saldo insuficiente");
                    }
                    else{
                        var saldoAnterior = saldoCuenta;   
                        restaCuenta(agua);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: $"+agua+"\n"+
                        "Saldo anterior: $"+saldoAnterior+"\n"+
                        "Saldo actual: $"+saldoCuenta);
                        
                    }
                break;
            case 2:
                    if(saldoSuficiente(luz)){
                        alert("No es posible pagar este servicio. Saldo insuficiente");
                    }
                    else{
                        var saldoAnterior = saldoCuenta;   
                        restaCuenta(luz);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: $"+luz+"\n"+
                        "Saldo anterior: $"+saldoAnterior+"\n"+
                        "Saldo actual: $"+saldoCuenta);
                        
                    }
                break;
            case 3:
                    if(saldoSuficiente(telefono)){
                        alert("No es posible pagar este servicio. Saldo insuficiente");
                    }
                    else{
                        var saldoAnterior = saldoCuenta;   
                        restaCuenta(telefono);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: $"+telefono+"\n"+
                        "Saldo anterior: $"+saldoAnterior+"\n"+
                        "Saldo actual: $"+saldoCuenta);
                        
                    }
                break;
            case 4:
                    if(saldoSuficiente(internet)){
                        alert("No es posible pagar este servicio. Saldo insuficiente");
                    }
                    else{
                        var saldoAnterior = saldoCuenta;   
                        restaCuenta(internet);
                        actualizarSaldoEnPantalla();
                        alert("Has pagado: $"+internet+"\n"+
                        "Saldo anterior: $"+saldoAnterior+"\n"+
                        "Saldo actual: $"+saldoCuenta);
                        
                    }
                break;        
            default:
                alert("Opción incorrecta");
                break;
        }
    }
    else {
        alert("Valor de ingreso incorrecto");
    }
};

function transferirDinero() {
    var transferir = prompt("Ingrese cantidad de dinero a transferir");
    var chequeo = validarEntrada(transferir);
    if(chequeo){
        transferir = parseInt(transferir);
        if(saldoSuficiente(transferir)){
            alert("No es posible transferir ese monto. Saldo insuficiente");
        }
        else {
            var cuenta = parseInt(prompt("Ingrese la cuenta donde transferir"));
            var chequeo = validarEntrada(cuenta);
            if(chequeo){
                cuenta = parseInt(cuenta);
                if(cuenta==cuentaAmiga1 || cuenta==cuentaAmiga2){
                    restaCuenta(transferir);
                    actualizarSaldoEnPantalla();
                    alert(  "Se ha transferido: $"+transferir+"\n"+
                            "Cuenta de destino: "+cuenta);
                }
                else {
                    alert("No es posible transferir a esa cuenta. Seleccione una cuenta amiga");
                };
            }
            else {
                alert("Valor de ingreso incorrecto");
            };
        };
    }
    else {
        alert("Valor de ingreso incorrecto");
    }
};

function iniciarSesion() {
    var codigo = parseInt(prompt("Bienvenido "+nombreUsuario+". Ingrese el código de acceso a su cuenta:"));
    var chequeo = validarEntrada(codigo);
        if(chequeo){
            codigo = parseInt(codigo);
            if(codigo==pin){
                alert("Bienvenido "+nombreUsuario+" ya puedes comenzar a realizar operaciones");
            }
            else {
                saldoCuenta = 0;
                alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
            }
        }
        else {
            saldoCuenta = 0;
            alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad");
        }
};

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
};

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
};

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
};