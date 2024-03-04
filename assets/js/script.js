var inputFechaPedido = document.getElementById('fecha-pedido');
var inputFechaEntrega= document.getElementById('fecha-entrega');

var fechaPedido = new Date();
var fechaEntrega = new Date();

fechaEntrega.setDate(fechaPedido.getDate() + 8);

var fechaPedidoFormateada = fechaPedido.toISOString().split('T')[0]
var fechaEntregaFormateada = fechaEntrega.toISOString().split('T')[0]

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

function agregarProducto() {
    var cantidad = document.getElementById('cantidad').value;
    var tipoPrenda = ObtnerTextoSelect('tipo-prenda');
    var tipoBlusa = ObtnerTextoSelect('tipo-blusa');
    var modeloPantalon = ObtnerTextoSelect('modelo-pantalon');
    var tallaPantalon= ObtnerTextoSelect('talla-pantalon');
    var tallaBlusa = ObtnerTextoSelect('talla-blusa');
    var modeloGorro = ObtnerTextoSelect('modelo-gorro');
    var color = ObtnerTextoSelect('colores');
    var observaciones = document.getElementById('observaciones').value;
    var descripcion;

    if(tipoPrenda === "Delantal"){
        descripcion = tipoPrenda + ' color ' + color + observaciones; 
    }else if(tipoPrenda === "Gorro"){
        descripcion = tipoPrenda + ' ' + modeloGorro + ' color ' + color + ' ' + observaciones;
    }else if(tipoPrenda  === "Uniforme"){
        descripcion = tipoPrenda + ': Blusa ' + tipoBlusa + ' talla ' + tallaBlusa + 
        ', Pantalon ' + modeloPantalon + ' talla ' + tallaPantalon + ' color ' + color + ' ' + observaciones;
    }else if(tipoPrenda === "Blusa"){
        descripcion = tipoPrenda + ' ' + tipoUniforme + ' talla ' + tallaBlusa + ' color ' + color + ' ' + observaciones;
    }else if(tipoPrenda === "Pantalon"){
        descripcion = tipoPrenda + ' ' + modeloPantalon + ' talla ' + tallaPantalon +' color ' + color + ' ' + observaciones;
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

    
}

/* document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('formularioPedido').addEventListener('submit', agregarProducto);
  }); */

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
    var tipoBlusa = document.getElementById("tipoBlusa");
    var tipoPantalon = document.getElementById("tipoPantalon");
    var color = document.getElementById("div-color");
    var tallaPantalon = document.getElementById("tallaPantalon");
    var tallaBlusa = document.getElementById("tallaBlusa");
    var modeloGorro = document.getElementById("modeloGorro");
    var modeloDelantal = document.getElementById("modeloDelantal");

    if(tipoPrenda  === "1") {
        modeloGorro.classList.add("desactivado");
        tipoBlusa.classList.remove("desactivado");    
        tipoPantalon.classList.remove("desactivado"); 
        color.classList.remove("desactivado"); 
        tallaPantalon.classList.remove("desactivado"); 
        tallaBlusa.classList.remove("desactivado");
        modeloDelantal.classList.add("desactivado"); 
    }else if(tipoPrenda === "5"){
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.add("desactivado");
        tallaPantalon.classList.add("desactivado"); 
        tallaBlusa.classList.add("desactivado"); 
        modeloGorro.classList.remove("desactivado"); 
        color.classList.remove("desactivado"); 
        modeloDelantal.classList.add("desactivado"); 
    }else if(tipoPrenda === "4"){
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.add("desactivado");
        tallaPantalon.classList.add("desactivado"); 
        tallaBlusa.classList.add("desactivado"); 
        modeloGorro.classList.add("desactivado"); 
        color.classList.remove("desactivado"); 
        modeloDelantal.classList.remove("desactivado"); 
        modelo
    }
    else if(tipoPrenda === "2"){
        tipoBlusa.classList.remove("desactivado");    
        tipoPantalon.classList.add("desactivado");
        tallaPantalon.classList.add("desactivado"); 
        tallaBlusa.classList.remove("desactivado"); 
        modeloGorro.classList.add("desactivado"); 
        color.classList.remove("desactivado");
        modeloDelantal.classList.add("desactivado");  
    }else if(tipoPrenda === "3"){
        tipoBlusa.classList.add("desactivado");    
        tipoPantalon.classList.remove("desactivado");
        tallaPantalon.classList.remove("desactivado"); 
        tallaBlusa.classList.add("desactivado"); 
        modeloGorro.classList.add("desactivado"); 
        color.classList.remove("desactivado");
        modeloDelantal.classList.add("desactivado");  
    }
}

const apiUrl = 'https://localhost:7285/api/';
const listaColores = 'Colores/ListarColores';
const ListaProductos = 'Producto/ListarProductos';
const ListarPantalones = 'ModeloPantalon/ListarPantalones';
const ListarBlusas = 'ModeloBlusa/ListarBlusas';
const ListarDelantal = 'Delantal/ListarDelantales';
const ListarGorros = 'Gorros/ListarGorros';


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
        console.log('Datos obtenidos de la API:', datos);
        datosSelect(datos, idSelect, idItem, nombreItem);
    })
    .catch(error => {
        // Capturar y manejar cualquier error
        console.error('Error:', error);
    })
      
}
obtenerDatos(listaColores, 'colores', 'idColor', 'color');
obtenerDatos(ListaProductos, 'tipo-prenda', 'idProducto', 'nombreProducto');
obtenerDatos(ListarPantalones, 'modelo-pantalon', 'idModeloPantalon', 'nombre');
obtenerDatos(ListarBlusas, 'tipo-blusa', 'idModeloBlusa', 'nombre');
obtenerDatos(ListarDelantal, 'modelo-delantal', 'idModeloDelantal', 'nombre');
obtenerDatos(ListarGorros, 'modelo-gorro', 'idModeloGorro', 'nombre');


//Función para obtener el cliente por el nombre
const BuscarCliente = 'Cliente/Nombre?nombreCliente=';

function ObtenerCliente(){
    var cliente = document.getElementById('buscar-cliente').value;
    const url = apiUrl + BuscarCliente + cliente;
    fetch(url)
    .then(response => {
        if(response.ok){
            return response.json();
        }
        throw new Error('Error al obtener datos de la API');
    })
    .then(datos => {
        console.log('Datos obtenidos de la API:', datos);
        var errorCliente = document.getElementById('errorCliente');
        errorCliente.textContent = '';
    })
    .catch(error => {
        // Capturar y manejar cualquier error
        var errorCliente = document.getElementById('errorCliente');
        errorCliente.textContent = 'No se encontraron datos para el cliente:' + cliente;
        console.error('Error:', error);
    })
}