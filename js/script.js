
var total = 0

var nombre          = document.getElementById("nombre");
var apellido        = document.getElementById("apellido");
var email            = document.getElementById("email");
var cantTickets = document.getElementById("inputCantidad");
var descuento       = document.getElementById("inputDescuento");



//Función de calculo total
function getValueFromInput(){
 
    //Validar los campos ingresados
if (nombre.value === "") {
    alert("Por favor, ingrese su nombre.");
    nombre.classList.add("is-invalid");
    nombre.focus();
    return;
}

if (apellido.value === "" ) {
    alert("Por favor, ingrese su apellido.");
    apellido.classList.add("is-invalid");
    apellido.focus();
    return;
}

if (email.value === "") {
    alert("Por favor, ingrese su email.");
    email.classList.add("is-invalid");
    email.focus();
    return;
}

if ( (cantTickets.value == 0)  ) {
    alert("Por favor, seleccione la cantidad de tickets.");
    cantTickets.classList.add("is-invalid");
    cantTickets.focus();
    return;
}

if (descuento.value == "") {
    alert("Por favor, seleccioná una categoría.");
    descuento.classList.add("is-invalid");
    descuento.focus();
    return;
}

    //Calculo total
    total = cantTickets.value * descuento.value * 200
    document.getElementById('total').innerText='$'+total.toFixed(2)
}

//Boton Resumen
var btn_r = document.getElementById('boton-resumen');
btn_r.addEventListener('click',(e)=>{
 getValueFromInput()
})

//Boton Borrar
var btn_b = document.getElementById('boton-borrar');
btn_b.addEventListener('click', (e)=>{



   });