const ventasBD = require ("./conexion").ventas;
const Ventas = require ("../clases/ventasClases");

function validarDatos(venta2){
    var datosCorrectos = false;
    if(venta2.idUsuario!=undefined && venta2.idProducto!=undefined && venta2.cantidad!=undefined && venta2.fecha!=undefined && venta2.status!=undefined){
        datosCorrectos = true;
    }
    return datosCorrectos;
}

async function mostarVentas(data){
    
}
