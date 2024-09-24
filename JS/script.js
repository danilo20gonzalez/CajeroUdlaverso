let saldo = 100000000; // Saldo inicial del usuario
let montoSeleccionado = 0;

function iniciarTransaccion() {
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('retiro-options').classList.remove('hidden'); // Muestra las opciones de retiro
}

function seleccionarRetiro(monto) {
    montoSeleccionado = monto;
    document.getElementById('monto-confirmar').textContent = `$${monto}`;
    mostrarConfirmacion();
}

function mostrarConfirmacion() {
    document.getElementById('retiro-options').classList.add('hidden');
    document.getElementById('confirmar-retiro').classList.remove('hidden');
}

function retirarPersonalizado() {
    const customAmount = document.getElementById('custom-amount').value;
    if (customAmount > 0) {
        montoSeleccionado = customAmount;
        document.getElementById('monto-confirmar').textContent = `$${customAmount}`;
        mostrarConfirmacion();
    } else {
        alert("Por favor ingresa un valor válido");
    }
}

function mostrarCampoPersonalizado() {
    document.getElementById('custom-amount-container').classList.remove('hidden');
}

function confirmarRetiro() {
    const finalMessage = document.getElementById('mensaje-final');
    if (saldo >= montoSeleccionado) {
        saldo -= montoSeleccionado;
        finalMessage.textContent = `Has retirado $${montoSeleccionado}. Saldo restante: $${saldo}`;
        
        // Llamar a la función para enviar el valor del retiro a OpenSim
        enviarDatosAOpenSim(montoSeleccionado);

    } else {
        finalMessage.textContent = "Saldo insuficiente";
    }
    mostrarPantallaFinal();
}

function cancelar() {
    document.getElementById('confirmar-retiro').classList.add('hidden');
    document.getElementById('retiro-options').classList.remove('hidden');
}

function mostrarPantallaFinal() {
    document.getElementById('confirmar-retiro').classList.add('hidden');
    document.getElementById('final-screen').classList.remove('hidden');
}

function reiniciar() {
    document.getElementById('final-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}

// Nueva función para enviar los datos a OpenSim
function enviarDatosAOpenSim(montoRetirado) {
    fetch('http://localhost:8000', {  // Reemplaza esta URL con la URL del servidor HTTP de OpenSim
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "retirado": montoRetirado
        })
    }).then(response => response.text())
      .then(data => {
          console.log('Datos enviados a OpenSim:', data);
      }).catch(error => {
          console.error('Error al enviar datos a OpenSim:', error);
      });
}
