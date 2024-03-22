var inputFechaPedido = document.getElementById('fecha-pedido');
var inputFechaEntrega= document.getElementById('fecha-entrega');

var fechaPedido = new Date();
var fechaEntrega = new Date();
var contadorGLobal = 0;

fechaEntrega.setDate(fechaPedido.getDate() + 8);

var fechaPedidoFormateada = fechaPedido.toISOString().split('T')[0]
var fechaEntregaFormateada = fechaEntrega.toISOString().split('T')[0]

// Contenedores select datos detalle
var tipoBlusa = document.getElementById("tipoBlusa");
var tipoPantalon = document.getElementById("tipoPantalon");
var color = document.getElementById("div-color");
var tallaPantalon = document.getElementById("tallaPantalon");
var tallaBlusa = document.getElementById("tallaBlusa");
var modeloGorro = document.getElementById("modeloGorro");
var modeloDelantal = document.getElementById("modeloDelantal");
var modeloUniforme = document.getElementById("tipoUniforme");
var generoUniforme = document.getElementById("generoUniforme");
// Contenedores select datos detalle

//Select datos detalle
var prendaTipo = document.getElementById('tipo-prenda');
var uniformeTipo = document.getElementById('tipo-uniforme');
var blusaTipo = document.getElementById('tipo-blusa');
var colorSelect = document.getElementById('colores');
var pantalonModelo = document.getElementById('modelo-pantalon');
var pantalonTalla = document.getElementById('talla-pantalon');
var blusaTalla = document.getElementById('talla-blusa');
var uniformeGenero = document.getElementById('genero-uniforme');
var gorroModelo = document.getElementById('modelo-gorro');
var delantalModelo = document.getElementById('modelo-delantal');
var uniformeGenero = document.getElementById('genero-uniforme');
var observaciones = document.getElementById('observaciones');
//Fin Select datos detalle

inputFechaPedido.value = fechaPedidoFormateada;
inputFechaEntrega.value = fechaEntregaFormateada;

function ObtnerTextoSelect(id){
    var element = document.getElementById(id);
    if(element){
        return element.options[element.selectedIndex].text;
    } else {
        return null;
    }
}


function convertirString(string){
    if(string === "null"){
        string = null;     
     }else if(!isNaN(parseInt(string))){
        string = parseInt(string);
     }
     return string;
}

function agregarProducto() {
    var cantidad = document.getElementById('cantidad').value;
    var tipoPrenda = ObtnerTextoSelect('tipo-prenda');
    var tipoUniforme = ObtnerTextoSelect('tipo-uniforme')
    var tipoBlusa = ObtnerTextoSelect('tipo-blusa');
    var modeloPantalon = ObtnerTextoSelect('modelo-pantalon');
    var tallaPantalon= ObtnerTextoSelect('talla-pantalon');
    var tallaBlusa = ObtnerTextoSelect('talla-blusa');
    var modeloGorro = ObtnerTextoSelect('modelo-gorro');
    var generoUniforme = ObtnerTextoSelect('genero-uniforme');
    var modeloDelantal = ObtnerTextoSelect('modelo-delantal');
    var color = ObtnerTextoSelect('colores');
    var observaciones = document.getElementById('observaciones').value;
    var descripcion;

    var uniformeId = document.getElementById('tipo-uniforme').value;
    var colorId = document.getElementById('colores').value;
    var blusaId = document.getElementById('tipo-blusa').value;
    var pantalonId = document.getElementById('modelo-pantalon').value;
    var gorroId = document.getElementById('modelo-gorro').value;
    var delantaId = document.getElementById('modelo-delantal').value;
    var generoId = document.getElementById('genero-uniforme').value;
    var pantalonTalla = document.getElementById('talla-pantalon').value;
    var blusaTalla = document.getElementById('talla-blusa').value;
    var factura = 6;

    if(tipoPrenda === "Delantal"){
        descripcion = tipoPrenda + ' ' + modeloDelantal + ' color ' + color + observaciones; 
    }else if(tipoPrenda === "Gorro"){
        descripcion = tipoPrenda + ' ' + modeloGorro + ' color ' + color + ' ' + observaciones;
    }else if(tipoPrenda  === "Uniforme"){
        descripcion = tipoPrenda + ' Para ' + generoUniforme + ': '+ tipoUniforme + ', Blusa talla ' + tallaBlusa + 
        ', Pantalon talla ' + tallaPantalon + ' color ' + color + ' ' + observaciones;
    }else if(tipoPrenda === "Blusa"){
        descripcion = tipoPrenda + ' Para ' + generoUniforme + ': ' + tipoBlusa + ' talla ' + tallaBlusa + ' color ' + color + ' ' + observaciones;
    }else if(tipoPrenda === "Pantalon"){
        descripcion = tipoPrenda + ' Para ' + generoUniforme + ': ' + modeloPantalon + ' talla ' + tallaPantalon +' color ' + color + ' ' + observaciones;
    }

    var tabla = document.querySelector('#tabla-datos tbody');
    var nuevaFila = tabla.insertRow();

    var celdaCantidad = nuevaFila.insertCell(0);
    var celdaDescripcion = nuevaFila.insertCell(1);
    var celdaValorUnitario = nuevaFila.insertCell(2);
    var celdaValorTotal = nuevaFila.insertCell(3);

    celdaCantidad.innerHTML = cantidad;
    celdaDescripcion.innerHTML = descripcion;
    celdaValorUnitario.innerHTML = '$ 35.000';
    celdaValorTotal.innerHTML = '$ 70.000';
    var inputCantidad = document.getElementById('cantidad');

    const detalle = {
        id: 0,
        id_Factura: factura,
        cantidad: parseInt(inputCantidad.value),
        id_Color: convertirString(colorId),
        id_Blusa: convertirString(blusaId),
        id_Uniforme: convertirString(uniformeId),
        id_Pantalon: convertirString(pantalonId),
        id_Gorro: convertirString(gorroId),
        id_Delantal: convertirString(delantaId),
        valor_Total_Detalle: 32000,
        observacion: convertirString(observaciones),
        tallaPantalon: convertirString(pantalonTalla),
        tallaBlusa: convertirString(blusaTalla),
        id_Genero_Cliente: convertirString(generoId)
        
    }/* 
    JSON.stringify(detalle); */
    console.log(detalle);
    GuardarDetalle(detalle);
    inputCantidad.value = 0;
    resetSelect();
}

function resetSelect(){
    prendaTipo.selectedIndex = 0;
    uniformeTipo.selectedIndex = 0;
    blusaTipo.selectedIndex = 0;
    colorSelect.selectedIndex = 0;
    pantalonTalla.selectedIndex = 0;
    blusaTalla.selectedIndex = 0;
    uniformeGenero.selectedIndex = 0;
    gorroModelo.selectedIndex = 0;
    delantalModelo.selectedIndex = 0;
    observaciones.value = "";


    tipoUniforme.classList.add("desactivado");
    tipoBlusa.classList.add("desactivado");
    tipoPantalon.classList.add("desactivado");
    color.classList.add("desactivado");
    tallaPantalon.classList.add("desactivado"); 
    tallaBlusa.classList.add("desactivado");
    modeloGorro.classList.add("desactivado");      
    modeloDelantal.classList.add("desactivado");
    generoUniforme.classList.add("desactivado"); 
}

function activarTipoPrenda(){
    var cantidad = document.getElementById("cantidad");
    var tipoPrenda = document.getElementById("tipoPrenda");

    if(cantidad.value > 0) {
        tipoPrenda.classList.remove("desactivado");    
    }else{
        alert("La cantidad de productos debe ser mayor a 0");
        cantidad.value="";  
        tipoPrenda.classList.add("desactivado");
        return false;          
    }
}

function activarModeloUniforme(){
    var tipoPrenda = document.getElementById("tipo-prenda").value;

    if(tipoPrenda  === "1") {
        modeloUniforme.classList.remove("desactivado");
        generoUniforme.classList.remove("desactivado");
        modeloGorro.classList.add("desactivado");
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.add("desactivado"); 
        color.classList.remove("desactivado"); 
        tallaPantalon.classList.remove("desactivado"); 
        tallaBlusa.classList.remove("desactivado");
        modeloDelantal.classList.add("desactivado"); 
    }else if(tipoPrenda === "4"){
        modeloUniforme.classList.add("desactivado");
        generoUniforme.classList.add("desactivado");
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.add("desactivado");
        tallaPantalon.classList.add("desactivado"); 
        tallaBlusa.classList.add("desactivado"); 
        modeloGorro.classList.remove("desactivado"); 
        color.classList.remove("desactivado"); 
        modeloDelantal.classList.add("desactivado"); 
    }else if(tipoPrenda === "5"){
        modeloUniforme.classList.add("desactivado");
        generoUniforme.classList.add("desactivado");
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.add("desactivado");
        tallaPantalon.classList.add("desactivado"); 
        tallaBlusa.classList.add("desactivado"); 
        modeloGorro.classList.add("desactivado"); 
        color.classList.remove("desactivado"); 
        modeloDelantal.classList.remove("desactivado"); 
    }
    else if(tipoPrenda === "2"){
        modeloUniforme.classList.add("desactivado");
        generoUniforme.classList.remove("desactivado");
        tipoBlusa.classList.remove("desactivado");    
        tipoPantalon.classList.add("desactivado");
        tallaPantalon.classList.add("desactivado"); 
        tallaBlusa.classList.remove("desactivado"); 
        modeloGorro.classList.add("desactivado"); 
        color.classList.remove("desactivado");
        modeloDelantal.classList.add("desactivado");  
    }else if(tipoPrenda === "3"){
        modeloUniforme.classList.add("desactivado");
        generoUniforme.classList.remove("desactivado");
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.remove("desactivado");
        tallaPantalon.classList.remove("desactivado"); 
        tallaBlusa.classList.add("desactivado"); 
        modeloGorro.classList.add("desactivado"); 
        color.classList.remove("desactivado");
        modeloDelantal.classList.add("desactivado");  
    }
}

function deshabilitarInput(){
    let nombre = document.getElementById('nombre');
    let tipoIdentificación = document.getElementById('tipo-identificacion');
    let identificacion = document.getElementById('identificacion');
    let direccion = document.getElementById('direccion');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');

    nombre.disabled = true;
    tipoIdentificación.disabled = true;
    identificacion.disabled = true;
    direccion.disabled = true;
    telefono.disabled = true;
    correo.disabled = true;
}

function habilitarInput(){
    let nombre = document.getElementById('nombre');
    let tipoIdentificación = document.getElementById('tipo-identificacion');
    let identificacion = document.getElementById('identificacion');
    let direccion = document.getElementById('direccion');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');

    nombre.disabled = false;
    tipoIdentificación.disabled = false;
    identificacion.disabled = false;
    direccion.disabled = false;
    telefono.disabled = false;
    correo.disabled = false;
}

function resetInput(){
    let nombre = document.getElementById('nombre');
    let tipoIdentificación = document.getElementById('tipo-identificacion');
    let identificacion = document.getElementById('identificacion');
    let direccion = document.getElementById('direccion');
    let telefono = document.getElementById('telefono');
    let correo = document.getElementById('correo');

    nombre.value = '';
    tipoIdentificación.selectedIndex = 0;
    identificacion.value = '';
    direccion.value = '';
    telefono.value = '';
    correo.value = '';
}

const apiUrl = 'http://localhost:39575/api/';
const listaColores = 'Colores/ListarColores';
const ListaProductos = 'Productos/ListarProductos';
const ListarPantalones = 'Pantalon/ListarPantalones';
const ListarBlusas = 'Blusa/ListarBlusas';
const ListarDelantal = 'Delantal/ListarDelantales';
const ListarGorros = 'Gorro/ListarGorros';
const ListarUniformes = 'Uniformes/ListarUniformes';
const ListarGenero = 'Genero/ListarGenero';
const ListarTipoIdentificacion = 'TipoIdentificacion/ListarTipoIdentificacion';
const buscarCliente = 'Cliente/BuscarCliente/';

const guardarDetalle = 'Detalle/GuardarDetalleVenta ';


function datosSelect(datos, idSelect, idItem, nombreItem){
    const selectColores = document.getElementById(idSelect);

    datos.response.forEach(opcion => {
        const optionElement = document.createElement('option');

        optionElement.value = opcion[idItem];
        optionElement.textContent = opcion[nombreItem];
        selectColores.appendChild(optionElement);
    });
}


function obtenerDatos(urlComplemento, idSelect, idItem, nombreItem){
    const url = apiUrl + urlComplemento;
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Error al obtener datos de la API');
    })
    .then(datos => {
        datosSelect(datos, idSelect, idItem, nombreItem);
    })
    .catch(error => {
        // Capturar y manejar cualquier error
        console.error('Error:', error);
    })
      
}
obtenerDatos(listaColores, 'colores', 'idColor', 'color');
obtenerDatos(ListaProductos, 'tipo-prenda', 'idTipoProducto', 'producto');
obtenerDatos(ListarPantalones, 'modelo-pantalon', 'idPantalon', 'nombrePantalon');
obtenerDatos(ListarBlusas, 'tipo-blusa', 'idBlusa', 'nombreBlusa');
obtenerDatos(ListarDelantal, 'modelo-delantal', 'idDelantal', 'nombreDelantal');
obtenerDatos(ListarGorros, 'modelo-gorro', 'idGorro', 'nombreGorro');
obtenerDatos(ListarUniformes, 'tipo-uniforme', 'idUniforme', 'nombreUniforme');
obtenerDatos(ListarGenero, 'genero-uniforme', 'idGenero', 'genero1');
obtenerDatos(ListarGenero, 'genero-uniforme', 'idGenero', 'genero1');
obtenerDatos(ListarTipoIdentificacion, 'tipo-identificacion', 'idTipoIdentificacion', 'identificacion');


//Función para obtener el cliente por el nombre
const BuscarCliente = 'Cliente/Nombre?nombreCliente=';


function GuardarDetalle(detalle){
     
    const url = apiUrl + guardarDetalle
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(detalle)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al enviar el objeto JSON.');
        }
        return response.json();
    })
    .then(data => {
        console.log('Objeto JSON enviado con éxito:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });

}

function ObtenerCliente(){
    var celularCliente = document.getElementById('buscar-cliente').value;
    let infoEstadoRegistro = document.getElementById('errorCliente');
    if (identificacionCliente.trim() == ''){
        
    }else{
        var formCliente = document.querySelector('.datos__header');
        celularCliente = parseInt(celularCliente)
        const url = apiUrl + buscarCliente + celularCliente
        fetch(url)
        .then(response => {
            if(response.ok){
                formCliente.classList.add('inhabilitado');
                infoEstadoRegistro.textContent = '';
                return response.json();
            }else{
                var deshabilitado = document.querySelector('.inhabilitado');
                if(deshabilitado !== null){
                    formCliente.classList.remove('inhabilitado');
                }
                var registroExitoso = document.querySelector('.registroExitoso');
                if(registroExitoso !== null){
                    registroExitoso.classList.remove('registroExitoso');
                }
                formCliente.classList.add('habilitado');
                infoEstadoRegistro.textContent = 'El cliente no se encuentra registrado';
                habilitarInput()
                resetInput();
                var inputBusqueda = document.getElementById('buscar-cliente').value;
                var telefono = document.querySelector('.telefono');
                telefono.classList.add('desactivado');
                telefono.disabled = true;
                telefono.value = inputBusqueda;
                console.log('no se encontro nada');
            }
            
        })
        .then(datos => {
            if(datos !== undefined){
                let nombre = document.getElementById('nombre');
                let tipoIdentificación = document.getElementById('tipo-identificacion');
                let identificacion = document.getElementById('identificacion');
                let direccion = document.getElementById('direccion');
                let telefono = document.getElementById('telefono');
                let correo = document.getElementById('correo');
                nombre.value = datos.nombre;
                tipoIdentificación.selectedIndex = datos.idTipoIdentificacion;
                identificacion.value = datos.identificacion;
                direccion.value = datos.direccion;
                telefono.value = datos.telefono;
                correo.value = datos.correo;
                deshabilitarInput();
            }
            
        })
    }
    
}


const guardarCliente = 'Cliente/GuardarCliente';
function GuardarCliente(){
    let nombre = document.getElementById('nombre').value;
    let tipoIdentificacion = document.getElementById('tipo-identificacion').value;
    let identificacion = document.getElementById('identificacion').value;
    let direccion = document.getElementById('direccion').value;
    let telefono = document.getElementById('telefono').value;
    let correo = document.getElementById('correo').value;

    var cliente = {
        idCliente : 0,
        identificacion : parseInt(identificacion),
        nombre : nombre,
        direccion : convertirString(direccion),
        telefono : telefono,
        correo : convertirString(correo),
        idTipoIdentificacion : parseInt(tipoIdentificacion)
    }

    const url = apiUrl + guardarCliente
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al enviar el objeto JSON.');
        }
        return response.json();
    })
    .then(data => {
        let infoEstadoRegistro = document.getElementById('errorCliente');
        infoEstadoRegistro.classList.add('registroExitoso');
        infoEstadoRegistro.textContent = 'El cliente se a registrado con exito';
        var formCliente = document.querySelector('.datos__header');
        formCliente.classList.add('inhabilitado');
        console.log('Objeto JSON enviado con éxito:', data);
        deshabilitarInput();
    })
    .catch(error => {
        console.error('Error:', error);
    });
    console.log(cliente);
}

