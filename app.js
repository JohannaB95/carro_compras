require('colors');
const fs = require('fs');

const datosArchivo = require('./datos.json');

const { mostrarMenu, digitarCodigo, digitarNombre, digitarInventario, digitarPrecio, pausa, preguntarOtroProducto, mostrarMenuPedido,
    ingresarNombreCliente, ingresarCodigo, ingresarNombre, ingresarUnidades, ingresarPrecio, pausa1, preguntarOtroPedido, } = require('./proy_modules/menu.js');

const main = async () => {

    console.clear();

    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★`.red);
    console.log(`★   Menú Principal   ★`.red);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★\n`.red);


    class Producto {
        #codigoProducto;
        #nombreProducto;
        #inventarioProducto;
        #precioProducto;

        constructor() {
            this.#codigoProducto = ' ';
            this.#nombreProducto = ' ';
            this.#inventarioProducto = 0;
            this.#precioProducto = 0;
        }

        set setCodigoProducto(value) {
            this.#codigoProducto = value;
        }

        get getCodigoProducto() {
            return this.#codigoProducto;
        }

        set setNombreProducto(value) {
            this.#nombreProducto = value;
        }

        get getNombreProducto() {
            return this.#nombreProducto;
        }

        set setInventarioProducto(value) {
            this.#inventarioProducto = value;
        }

        get getInventarioProducto() {
            return this.#inventarioProducto;
        }

        set setPrecioProducto(value) {
            this.#precioProducto = value;
        }

        get getPrecioProducto() {
            return this.#precioProducto;
        }
    }

    class ProductosTienda {
        #listaProductos;

        constructor() {
            this.#listaProductos = [];
        }

        get getListaProductos() {
            return this.#listaProductos;
        }

          /*Leer los datos del archivo Json
            Serializar para trabajar los datos como un arreglo de objetos de clase Producto
            Se crea un método que permite visualizar cada uno de los atributos de los productos que se añade
            al archivo datos Json, este tiene un contador que va a ir contando la cantidad de datos que posee el 
            archivo y va a mostrar cuantos hay en total*/
        cargarArchivoProductos() {
            let contador = 0;
            if (datosArchivo.length > 0) {
                datosArchivo.forEach(objeto => {
                    contador++;
                    let producto = new Producto;
                    producto.setCodigoProducto = objeto.codigoProducto;
                    producto.setNombreProducto = objeto.nombreProducto;
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    producto.setPrecioProducto = objeto.precioProducto;
                    this.#listaProductos.push(producto);

           console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
            console.log(`♦ `.red + `Total de productos cargados ==> `.bgRed + ` ${contador}`.bgRed + ` ♦`.red);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.red);
                });
            } else {
                console.log(`Error, el archivo datos.json no contiene datos\n`.bgYellow);
            }
 
        }

        /*Se crea un método que permite visualizar cada uno de los productos y sus respectivos atributos y que 
         se encuentran almacenados en datos.json*/
        mostrarProductos() {
            this.getListaProductos.forEach(producto => {
                console.log(`­♦    `.yellow + producto.getCodigoProducto + `     ­♦   `.yellow
                    + producto.getNombreProducto + `      ­♦   `.yellow +
                    +  producto.getInventarioProducto + `      ­♦   `.yellow +
                    +  producto.getInventarioProducto + `       ­♦   `.yellow +
                    +  producto.getPrecioProducto + `     ­♦   `.yellow);
            })
        }

        //Se crea un nuevo método que permite el ingreso de un nuevo producto
        nuevoIngreso = async () => {

            let option = ' ';
            do {
                do {
                    option = await mostrarMenu(); // Espera la entrada del usuario para mostrar un menú y asigna la opción elegida a la variable 'option'.
                } while (!(option >= '0' && option <= '1')); // Verifica si la opción está entre 0 y 1

                if (option !== '1') {
                    console.log(`\nSe ejecuta el proceso ${option}`);
                    await pausa(); // 
                }
            } while (option !== '1');  // Continúa el ciclo hasta que la opción sea 1

            while (true) {
                let codigo = ' ';
                do {
                    do {
                        codigo = await digitarCodigo(); // Espera a que el usuario ingrese un código y lo asigna a la variable 'codigo'
                    } while (!(codigo !== '')); // Verifica si el código no está vacío.
                } while (option !== '1');

                let nombre = ' ';
                do {
                    do {
                        nombre = await digitarNombre();
                    } while (!(nombre !== ''));
                } while (option !== '1');

                let inventario = 0;
                do {
                    do {
                        inventario = await digitarInventario();
                    } while (!(inventario !== 0)); // Verifica si el inventario no es cero
                } while (option !== '1');

                let precio = 0;
                do {
                    do {
                        precio = await digitarPrecio();
                    } while (!(precio !== 0));
                } while (option !== '1');

                 // Se crea un nuevo objeto Producto con los valores ingresados y se llama al método guardarProducto para guardarlo
                const producto = new Producto();

                producto.setCodigoProducto = codigo;
                producto.setNombreProducto = nombre;
                producto.setInventarioProducto = inventario;
                producto.setPrecioProducto = precio;

                this.guardarProducto(producto);

                /*Se pregunta  al usuario si desea continuar ingresando más productos, si la respuesta es negativa
                se rompe el bucle */
                const continuar = await preguntarOtroProducto(); 

                if (!continuar) {
                    break; 
                }
            }
        }
        
        /*Escribir datos en un archivo almacenado en unidad
        Deserializar para convertir un arreglo de objetos de clase en cadena Json
        Se crea un método que agrega un producto a la lista productos*/
        guardarProducto(producto) {
           
            // Agregar el producto a la lista de productos
            this.#listaProductos.push(producto);
            
            // Mapear la lista de productos a un formato de objeto específico
                const instanciaClaseAObjetos = this.#listaProductos.map(producto => {
                    return {
                        codigoProducto: producto.getCodigoProducto,
                        nombreProducto: producto.getNombreProducto,
                        inventarioProducto: Number(producto.getInventarioProducto),
                        precioProducto: Number(producto.getPrecioProducto)
                    };
                });
                
                // Convertir la lista de objetos a una cadena JSON con formato legible
                const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);

                const nombreArchivo = 'datos.json';

                // Escribir el archivo con la cadena JSON en formato UTF-8
                fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

                console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
                console.log(`♦   `.cyan + `Datos guardados en ${nombreArchivo}`.bgCyan + `   ♦`.cyan);
                console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);
        }

        //Se crea un nuevo método que realiza el proceso para un nuevo pedido
        nuevoPedido = async () => {

            // Declaración de un array de productos
            const productos = [];
            let option1 = ' ';
            do {
                do {
                    option1 = await mostrarMenuPedido(); // Espera la entrada del usuario para mostrar un menú y asigna la opción elegida a la variable 'option'
                } while (!(option1 >= '0' && option1 <= '1'));  // Verifica si la opción está entre 0 y 1

                if (option1 !== '1') {
                    console.log(`\nSe ejecuta el proceso ${option1}`.green);
                    await pausa1();
                }
            } while (option1 !== '1');

            // Declaración y validación del nombre del cliente
            let nombreCliente = ' ';
            do {
                do {
                    // Esperar a que se ingrese el nombre del cliente
                    nombreCliente = await ingresarNombreCliente();
                } while (!(nombreCliente !== ''));
            } while (option1 !== '1');

             // Bucle de ingreso de detalles del pedido
            while (true) {
                let codigo = ' ';
                do {
                    do {
                        codigo = await ingresarCodigo(); // Espera a que el usuario ingrese un código y lo asigna a la variable 'codigo'
                    } while (!(codigo !== '')); // Verifica si el código no está vacío.
                } while (option1 !== '1');

                let nombre = ' ';
                do {
                    do {
                        nombre = await ingresarNombre();
                    } while (!(nombre !== ''));
                } while (option1 !== '1');

                let unidades = 0;
                do {
                    do {
                        unidades = await ingresarUnidades();
                    } while (!(unidades !== 0));
                } while (option1 !== '1');

                let precio = 0;
                do {
                    do {
                        precio = await ingresarPrecio();
                    } while (!(precio !== 0));
                } while (option1 !== '1');

                // Definición de la función imprimirFactura para imprimir la factura del pedido
               const imprimirFactura = (nombreCliente, productos) => {
                    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★                    `.magenta + `FACTURA DE COMPRA`.bgMagenta + `                       ★`.magenta)
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★              `.magenta + `Nombre del cliente: ${nombreCliente}`.green + `                ★`.magenta);
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★   `.magenta + `Código |    Producto    | Cantidad |  Precio |  Total `.cyan + `   ★`.magenta);
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    let total = 0;
                    // Iterar sobre cada producto y calcular el subtotal
                    productos.forEach(producto => {
                        const subtotal = producto.unidades * producto.precio;
                        console.log(`★`.magenta + `    ${producto.codigo}    |    ${producto.nombre}    |    ${producto.unidades}    |  ${producto.precio}  |   ${subtotal} `.cyan + `★`.magenta);
                        total += subtotal;
                    });
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★                     `.magenta + `TOTAL: ${total}`.cyan + `                           ★`.magenta);
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                };

                 // Agregar el producto al array de productos
                productos.push({
                    codigo: codigo,
                    nombre: nombre,
                    unidades: unidades,
                    precio: precio
                });

                // Preguntar si se desea agregar otro pedido
                const continuarPedido = await preguntarOtroPedido();

                // Verificar si no se desea continuar con el pedido y llama a la función imprimirFactura
                if (!continuarPedido) {

                    imprimirFactura(nombreCliente, productos);
                    break;
                }
            }
        }
    }


    let productosTienda = new ProductosTienda();

    productosTienda.cargarArchivoProductos();

    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.green);
    console.log(`♦  `.green + `Datos Apertura Tienda`.bgGreen + `  ♦`.green);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.green);

    productosTienda.mostrarProductos();

    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.magenta);
    console.log(`♦  `.magenta + `Datos Cierre Tienda`.bgMagenta + `  ♦`.magenta);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.magenta);

    productosTienda.mostrarProductos();

    await productosTienda.nuevoIngreso();

    await productosTienda.nuevoPedido();

};

main();