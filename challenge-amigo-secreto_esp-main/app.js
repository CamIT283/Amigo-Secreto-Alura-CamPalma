//Crear un array para almacenar los nombres de nuestros "Amigos secretos"
let amigosSecretos = [];

//Captura el valor del campo de entrada
function textoAlElemento(elemento, texto ) {
    let elementoHTML = document.querySelector(elemento)
    elementoHTML.innerHTML = texto;
    
}
//Implementar una validación para asegurarse de que el campo no esté vacío. Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre.
//Si el campo no está vacío, agregar el nombre al array de amigos secretos y mostrar
//un mensaje de confirmación con el nombre del amigo secreto agregado.
function agregarAmigo() {
    let nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        textoAlElemento("#mensaje", "Por favor, inserte un nombre.");
        } else {
            amigosSecretos.push(nombre);
            textoAlElemento("#mensaje", `Se agregó ${nombre} a la lista de amigos secretos `)
            textoAlElemento("#lista", `${nombre} <button class="btn btn-danger" onclick `)
            
        }
    }

//Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
//Si el arreglo no está vacío, mostrar un mensaje de confirmación con el nombre del amigo
//secreto agregado. Si el arreglo está vacío, mostrar un mensaje de confirmación
//indicando que no hay amigos secretos agregados.
function mostrarAmigos() {
    if (amigosSecretos.length > 0) {
        textoAlElemento("#mensaje", `Los amigos secretos son: ${amigosSecretos} `)
        } else {
            textoAlElemento("#mensaje", `No hay amigos secretos agregados.`)
            }
}


// Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
function limpiarCampo() {
    document.getElementById("nombre").value = "";
    }

