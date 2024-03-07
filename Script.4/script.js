class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
}

class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(producto) {
        this.productos.push(producto);
    }

    llenarTabla() {
        const tablaProductos = document.getElementById('tablaProductos').getElementsByTagName('tbody')[0];
        this.productos.forEach(producto => {
            const fila = tablaProductos.insertRow();
            fila.innerHTML = <><td> ${producto.nombre}</td><td>${producto.precio}</td><td>${producto.cantidad}</td></>;
        });
    }

    llenarSelect() {
        const selectProducto = document.getElementById('producto');
        this.productos.forEach(producto => {
            const option = document.createElement('option');
            option.text = producto.nombre;
            selectProducto.add(option);
        });
    }

    realizarPedido() {
        const productoSeleccionado = document.getElementById('producto').value;
        const cantidadPedido = parseInt(document.getElementById('cantidad').value);
        const nombreCliente = document.getElementById('cliente').value;

        alert("Producto Seleccionado: " + productoSeleccionado);
        alert("Cantidad Pedido: " + cantidadPedido);
        alert("Nombre Cliente: " + nombreCliente);

        const producto = this.productos.find(p => p.nombre === productoSeleccionado);
        alert("Producto: " + producto);

        if (!producto) {
            alert("El producto seleccionado no existe en el inventario.");
            return;
        }

        if (cantidadPedido < producto.cantidad) {
            producto.cantidad -= cantidadPedido;
            const pedido = new Pedido(producto, cantidadPedido, nombreCliente);
            this.pedidos.push(pedido);
            return;
        }
        else {
            alert("no se puede")
        }

        const filas = document.getElementById('tablaProductos').getElementsByTagName('tr');
        for (let i = 0; i < filas.length; i++) {
            const nombreProducto = filas[i].getElementsByTagName('td')[0].textContent;
            if (nombreProducto === producto.nombre) {
                filas[i].getElementsByTagName('td')[2].textContent = producto.cantidad;
                break;
            }
        }

        alert ('Pedido realizado:  ${cantidadPedido} unidades de ${ producto.nombre }  por ${ nombreCliente } ')
    }
}

const inventario = new Inventario();
const productosPredefinidos = [
    { nombre: "Televisor", precio: 500, cantidad: 10 },
    { nombre: "Laptop", precio: 1000, cantidad: 15 },
    { nombre: "Smartphone", precio: 600, cantidad: 20 },
    { nombre: "Accesorio", precio: 20, cantidad: 50 }
];
productosPredefinidos.forEach(producto => {
    inventario.agregarProducto(new Producto(producto.nombre, producto.precio, producto.cantidad));
});

inventario.llenarTabla();
inventario.llenarSelect();

document.getElementById('realizarPedidoBtn').addEventListener('click', inventario.realizarPedido.bind(inventario));