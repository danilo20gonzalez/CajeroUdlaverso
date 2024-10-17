// Permite que el elemento sea un objetivo para soltar si es el recuadro correcto
function allowDrop(ev) {
    ev.preventDefault();
}

// Inicia el proceso de arrastrar, guarda el contenido y la categoría
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
    ev.dataTransfer.setData("category", ev.target.parentElement.id);
}

// Suelta el contenido arrastrado solo en el recuadro correspondiente
function drop(ev) {
    ev.preventDefault();
    var category = ev.dataTransfer.getData("category");

    // Verificar si el recuadro correcto coincide con la categoría del texto
    if ((category === 'fortalezas-list' && ev.target.id === 'fortalezas') ||
        (category === 'debilidades-list' && ev.target.id === 'debilidades') ||
        (category === 'oportunidades-list' && ev.target.id === 'oportunidades') ||
        (category === 'amenazas-list' && ev.target.id === 'amenazas')) {
        
        var data = ev.dataTransfer.getData("text");
        var newP = document.createElement("p");
        newP.textContent = data;

        // Añadir botón de borrar a cada elemento arrastrado
        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.className = "delete-btn";
        deleteBtn.onclick = function() {
            newP.remove();  // Elimina la opción
        };

        newP.appendChild(deleteBtn);  // Añadir el botón de eliminar al párrafo
        ev.target.appendChild(newP);  // Añadir el elemento arrastrado al recuadro correcto
    } else {
        alert("No puedes soltar esta opción aquí. Elige el recuadro correcto.");
    }
}

// Muestra u oculta la lista de opciones al hacer clic en una categoría
function toggleList(id) {
    var list = document.getElementById(id);
    if (list.style.display === "none") {
        list.style.display = "block";
    } else {
        list.style.display = "none";
    }
}

// Simula la visualización de conclusiones, puedes personalizar esta parte
function verConclusiones() {
    alert("Conclusiones basadas en las opciones seleccionadas.");
}
