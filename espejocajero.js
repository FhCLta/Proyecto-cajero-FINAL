let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "abcd" }
];

let cuentaSeleccionada = null;

function obtenerCuentaSeleccionada() {
    let cuentaSelect = document.getElementById("cuenta");
    let cuentaSeleccionadaNombre = cuentaSelect.value;

    let cuenta = cuentas.find(function (c) {
        return c.nombre === cuentaSeleccionadaNombre;
    });

    return cuenta;
}

function autenticar() {
    let cuenta = obtenerCuentaSeleccionada();
    let passwordInput = document.getElementById("password");
    let password = passwordInput.value;

    if (cuenta && cuenta.password === password) {
        // Autenticación exitosa
        cuentaSeleccionada = cuenta;
        mostrarOpciones();
    } else {
        alert("Password incorrecto. Intenta nuevamente.");
    }
}

function mostrarOpciones() {
    document.getElementById("consultarSaldo").style.display = "block";
    document.getElementById("ingresarMonto").style.display = "block";
    document.getElementById("realizarRetiro").style.display = "block";

}


function consultarSaldo() {
    alert("Saldo actual de " + cuentaSeleccionada.nombre + ": $" + cuentaSeleccionada.saldo);
}



function ingresarMonto() {
    let montoIngresado = prompt("Ingrese el monto a ingresar:");


    if (montoIngresado !== null && !isNaN(montoIngresado) && montoIngresado > 0) {
        montoIngresado = parseFloat(montoIngresado);


        if (cuentaSeleccionada.saldo + montoIngresado >= 10 && cuentaSeleccionada.saldo + montoIngresado <= 990) {

            cuentaSeleccionada.saldo += montoIngresado;
            alert("Monto ingresado: $" + montoIngresado + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);

        } else {
            alert("La operación no cumple con la regla de negocio. Intente con otro monto.");
        }
    } else {
        alert("Monto inválido. Intenta nuevamente.");
    }
}


function realizarRetiro() {
    let montoRetiro = prompt("Ingrese el monto a retirar:");


    if (montoRetiro !== null && !isNaN(montoRetiro) && montoRetiro > 0) {
        montoRetiro = parseFloat(montoRetiro);


        if (cuentaSeleccionada.saldo - montoRetiro >= 10 && cuentaSeleccionada.saldo - montoRetiro <= 990) {
            cuentaSeleccionada.saldo -= montoRetiro;
            alert("Monto retirado: $" + montoRetiro + "\nNuevo saldo: $" + cuentaSeleccionada.saldo);

        }
        else {
            alert("La operación no cumple con la regla de negocio. Intente con otro monto.");
        }
    } else {
        alert("Monto inválido. Intenta nuevamente.");
    }
}
