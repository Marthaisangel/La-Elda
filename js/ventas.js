
let nombreProducto = document.getElementById('listaNomProd')
let nombreCantidad = document.getElementById('listaNomCant')
let nombrePrecio = document.getElementById('listaNomPrec')

let precioTotal = document.getElementById('totalVent')
let cobrarTotal = document.getElementById('totalCobrar')

let inputRecibido = document.getElementById('exampleInputtotal') //input
let totalDevolver = document.getElementById('totDevolver')


detalles = (nombre, cantidad, precio) => {
    
    nombreProducto.innerHTML = nombre;
    nombreCantidad.innerHTML = cantidad;
    nombrePrecio.innerHTML = `$ ${precio}`;


    precioTotal.innerHTML = `$ ${precio}`;

    cobrarTotal.innerHTML = `$ ${precio}`
    


    inputRecibido.addEventListener('keyup', (event) => {

        
        if (event.keyCode === 13) {
            añadir = () => {
                arregloTexto.push(inputRecibido.value - precio)

                inputRecibido.value = "";
            }

            añadir()
        }

        

        totalDevolver.innerHTML = arregloTexto;

        
    })


    
}

detalles('papa', 5, 147600)

let arregloTexto = [];







