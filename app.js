//Se importa el módulo colors para añadir color a la interfaz.
require('colors');

//Se importa el módulo fs para gestionar los archivos en el sistema
const fs = require('fs');

// Lee y carga el contenido del archivo 'datos.json' en la variable 'datosArchivo'
const datosArchivo = require('./datos.json');

//Se importan funciones desde el archivo 'menu.js' en la carpeta 'proy_modules'
const { mostrarMenu, digitarCodigo, digitarNombre, digitarInventario, digitarPrecio, pausa, preguntarOtroProducto, mostrarMenuPedido,
    ingresarNombreCliente, ingresarCodigo, ingresarNombre, ingresarUnidades, ingresarPrecio, pausa1, preguntarOtroPedido, } = require('./proy_modules/menu.js');

//Se declara una función flecha llamada main y que es asíncrona
const main = async () => {

    // Limpia la consola antes de imprimir el menú principal
    console.clear();

    // Se solicita imprimir un encabezado en la consola y que sea de color rojo, se añade diseño a la interfaz
    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★`.red);
    console.log(`★   Menú Principal   ★`.red);
    console.log(`★★★★★★★★★★★★★★★★★★★★★★\n`.red);

    //Se define la clase Producto
    class Producto {

        // Se declaran los atributos de la clase y que serán privados y son el código, nombre, inventario y precio del producto
        #codigoProducto;
        #nombreProducto;
        #inventarioProducto;
        #precioProducto;

        // Se llama al constructor que inicializa los atributos de la clase
        constructor() {

            // Inicializa el código del producto como un espacio en blanco
            this.#codigoProducto = ' ';
            // Inicializa el nombre del producto como un espacio en blanco
            this.#nombreProducto = ' ';
            // Inicializa el inventario del producto como 0
            this.#inventarioProducto = 0;
            // Inicializa el precio del producto como 0
            this.#precioProducto = 0;
        }

        //Se crea un método setter para establecer el valor del atributo #codigoProducto
        set setCodigoProducto(value) {
            this.#codigoProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #codigoProducto
        get getCodigoProducto() {
            return this.#codigoProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #nombreProducto
        set setNombreProducto(value) {
            this.#nombreProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #nombreProducto
        get getNombreProducto() {
            return this.#nombreProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #inventarioProducto
        set setInventarioProducto(value) {
            this.#inventarioProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #inventarioProducto
        get getInventarioProducto() {
            return this.#inventarioProducto;
        }

        //Se crea un método setter para establecer el valor del atributo #precioProducto
        set setPrecioProducto(value) {
            this.#precioProducto = value;
        }

        //Se crea un método getter para obtener el valor del atributo #precioProducto
        get getPrecioProducto() {
            return this.#precioProducto;
        }
    }

    //Se define la clase ProductosTienda
    class ProductosTienda {

        // Se declara un atributo privado llamado listaProductos
        #listaProductos;

        // Constructor que inicializa el atributo #listaProductos como un arreglo vacío
        constructor() {
            this.#listaProductos = [];
        }

        // Se crea un método getter para obtener la lista de productos de #listaProductos
        get getListaProductos() {
            return this.#listaProductos;
        }

        /*Leer los datos del archivo Json
          Serializar para trabajar los datos como un arreglo de objetos de clase Producto*/
        // Se crea un método para cargar un archivo de datos que contiene la información de los productos
        cargarArchivoProductos() {

            //Se crea una variable llamada contador que se inicia en 0
            let contador = 0;

            //Se utiliza un if para verificar si existe algún dato en el archivo datosArchivo
            if (datosArchivo.length > 0) {
                //Se usa un forEach para iterar cada elemento que se encuentre en el archivo 
                datosArchivo.forEach(objeto => {
                    //El contador aumentara cada vez +1
                    contador++;

                    // Se crea una nueva instancia de la clase Producto
                    let producto = new Producto;

                    // Se asignan los valores del objeto a cada uno de los atributos 

                    /*Se llama al método setCodigoProducto del objeto producto y se le asigna el valor de la propiedad 
                    codigoProducto del objeto objeto*/
                    producto.setCodigoProducto = objeto.codigoProducto;
                    /*Se llama al método setNombreProducto del objeto producto y se le asigna el valor de la propiedad
                    nombreProducto del objeto objeto*/
                    producto.setNombreProducto = objeto.nombreProducto;
                    /*Se llama al método setInventarioProducto del objeto producto y se le asigna el valor de la propiedad 
                    inventarioProducto del objeto objeto*/
                    producto.setInventarioProducto = objeto.inventarioProducto;
                    /*Se llama al método setPrecioProducto del objeto producto y se le asigna el valor de la propiedad 
                    precioProducto del objeto objeto*/
                    producto.setPrecioProducto = objeto.precioProducto;

                    // Agrega el producto a la lista de productos en la clase ProductosTienda
                    this.#listaProductos.push(producto);

                    //Se imprime en la consola el número de productos cargados y se añade diseño a la interfaz
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
                    console.log(`♦ `.red + `Total de productos cargados ==> `.bgRed + ` ${contador}`.bgRed + ` ♦`.red);
                    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.red);
                });
                //Si el archivo está vacio, se imprime un mensaje de error
            } else {
                console.log(`Error, el archivo datos.json no contiene datos\n`.bgYellow);
            }
        }

        //Se crea un método llamado mostrarProductos
        mostrarProductos() {

            /*Itera sobre cada producto en la lista y se obtienen los valores de cada uno de los atributos, luego se imprime 
            la información en la consola siguiendo el orden en el que se están especificando*/
            this.getListaProductos.forEach(producto => {
                console.log(`­♦    `.yellow + producto.getCodigoProducto + `     ­♦   `.yellow
                    + producto.getNombreProducto + `      ­♦   `.yellow +
                    +  producto.getInventarioProducto + `      ­♦   `.yellow +
                    +  producto.getInventarioProducto + `       ­♦   `.yellow +
                    +  producto.getPrecioProducto + `     ­♦   `.yellow);
            })
        }

        //Se crea un nuevo método asíncronico que permite el ingreso de un nuevo producto
        nuevoIngreso = async () => {

            // Se declara una variable llamada option con un valor inicial de un string vacío
            let option = ' ';

            // Bucle externo que se ejecuta al menos una vez y se repite mientras la opción no sea '1'
            do {
                // Bucle interno que se ejecuta al menos una vez y se repite hasta que se ingresa una opción válida del menú
                do {
                    // Muestra el menú y espera la entrada del usuario
                    option = await mostrarMenu();
                    // Verifica si la opción está entre 0 y 1
                } while (!(option >= '0' && option <= '1'));

                // Verifica si la opción no es '0'
                if (option !== '0') {
                    //Se imprime un mensaje diciendo cual es el proceso que se ejecuta
                    console.log(`\nSe ejecuta el proceso ${option}`.green);
                    // Se pausa la ejecución para esperar la entrada del usuario
                    await pausa();
                }
                // Se repite mientras la opción no sea '1'
            } while (option !== '1');

            //Se usa un bucle que se estará ejecutando indefinidamente hasta que el usuario decida no ingresar más productos
            while (true) {

                // Se declara una variable llamada codigo con un valor inicial de un string vacío
                let codigo = ' ';

                // Bucle que se ejecuta al menos una vez y se repite hasta que se ingresa un código válido
                do {
                    // Espera a que el usuario ingrese un código y lo asigna a la variable 'codigo'
                    codigo = await digitarCodigo();
                    // Se repite mientras 'codigo' sea un string vacío
                } while (!(codigo !== ''));

                // Se declara una variable llamada nombre con un valor inicial de un string vacío
                let nombre = ' ';

                // Bucle que se ejecuta al menos una vez y se repite hasta que se ingresa un nombre válido
                do {
                    // Espera a que el usuario ingrese un nombre y lo asigna a la variable 'nombre'
                    nombre = await digitarNombre();
                    // Se repite mientras 'nombre' sea un string vacío
                } while (!(nombre !== ''));

                // Se declara una variable llamada inventario con un valor inicial de un string vacío
                let inventario = '';

                // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un inventario válido
                do {
                    // Espera a que el usuario ingrese un inventario y lo asigna a la variable 'inventario'
                    inventario = await digitarInventario();
                    // Se repite mientras 'inventario' sea un string vacío
                } while (!(inventario !== ''));

                // Se declara una variable llamada precio con un valor inicial de un string vacío
                let precio = '';

                // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un precio válido
                do {
                    // Espera a que el usuario ingrese un precio y lo asigna a la variable 'precio'
                    precio = await digitarPrecio();
                    // Se repite mientras 'precio' sea un string vacío
                } while (!(precio !== ''));

                // Se crea un nuevo objeto Producto y se les asigna los valores ingresados por el usuario
                const producto = new Producto();

                //Se asigna el valor del código del producto con el valor de la variable codigo.
                producto.setCodigoProducto = codigo;
                //Se asigna el valor del nombre del producto con el valor de la variable nombre
                producto.setNombreProducto = nombre;
                //Se asigna el valor del inventario del producto con el valor de la variable inventario.
                producto.setInventarioProducto = inventario;
                //Se asigna el valor del precio del producto con el valor de la variable precio.
                producto.setPrecioProducto = precio;

                // Se llama al método guardarProducto para guardar el producto
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
        Se crea un método que agrega un nuevo producto a la lista productos y que tiene como argumento producto*/
        guardarProducto(producto) {

            // Agrega el producto a la lista de productos
            this.#listaProductos.push(producto);

            // Convierte objetos de clase a objetos de JavaScript y luego a una cadena de texto JSON para su almacenamiento
            //Se crea un nuevo arreglo
            const instanciaClaseAObjetos = this.#listaProductos.map(producto => {
                // Mapea cada objeto de clase a un objeto de JavaScript con claves específicas
                //Devuelve un objeto con las propiedades del producto
                return {
                    /*Asigna el valor de la propiedad codigoProducto del objeto producto a la clave codigoProducto 
                    en el objeto devuelto*/
                    codigoProducto: producto.getCodigoProducto,
                    /*Asigna el valor de la propiedad nombreProducto del objeto producto a la clave nombreProducto
                    en el objeto devuelto*/
                    nombreProducto: producto.getNombreProducto,
                    /*Convierte el valor de la propiedad inventarioProducto del objeto producto en un número 
                    utilizando la función Number y lo asigna a la clave inventarioProducto en el objeto devuelto.*/
                    inventarioProducto: Number(producto.getInventarioProducto),
                    /*Convierte el valor de la propiedad precioProducto del objeto producto en un número utilizando
                    la función Number y lo asigna a la clave precioProducto en el objeto devuelto. */
                    precioProducto: Number(producto.getPrecioProducto)
                };
            });

            // Se utiliza JSON.stringify para convertir los objetos de JavaScript en una cadena de texto JSON
            const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);
            //Se declara una variable que va a almacenar el archivo en el que se va a guardar la información
            const nombreArchivo = 'datos.json';

            /*Se utiliza para escribir datos en un archivo de manera sincrónica. El nombre del archivo en el que 
            se escribirán los datos. La cadena de texto JSON que se va a escribir en el archivo. La codificación 
            de caracteres que se utilizará al escribir el archivo.*/
            fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

            // Se imprime un mensaje indicando que los datos se han guardado en un archivo llamado datos.json
            console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
            console.log(`♦   `.cyan + `Datos guardados en ${nombreArchivo}`.bgCyan + `   ♦`.cyan);
            console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);
        }

        //Se crea un nuevo método asincróno que realiza el proceso para un nuevo pedido
        nuevoPedido = async () => {

            /*Se declara una variable llamada productos que tiene un  array vacío que almacenará los productos 
            ingresados en el pedido*/
            const productos = [];

            // Se declara una variable llamada option con un valor inicial de un string vacío
            let option1 = ' ';
            // Bucle externo que se ejecuta al menos una vez y se repite mientras la opción no sea '1'
            do {
                // Bucle interno que se ejecuta al menos una vez y se repite hasta que se ingresa una opción válida del menú
                do {
                    // Muestra el menú y espera la entrada del usuario
                    option1 = await mostrarMenuPedido();
                    // Verifica si la opción está entre 0 y 1
                } while (!(option1 >= '0' && option1 <= '1'));

                // Verifica si la opción no es '0'
                if (option1 !== '0') {
                    //Se imprime un mensaje diciendo cual es el proceso que se ejecuta
                    console.log(`\nSe ejecuta el proceso ${option1}`.green);
                    // Se pausa la ejecución para esperar la entrada del usuario
                    await pausa1();
                }
                // Se repite mientras la opción no sea '1'
            } while (option1 !== '1');

            // Se declara una variable llamada nombreCliente con un valor inicial de un string vacío
            let nombreCliente = ' ';

            // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un nombre de cliente válido
            do {
                // Espera a que el usuario ingrese el nombre del cliente y lo asigna a la variable 'nombreCliente'
                nombreCliente = await ingresarNombreCliente();
                // Se repite mientras 'nombreCliente' sea un string vacío
            } while (!(nombreCliente !== ''));

            //Se usa un bucle que se estará ejecutando indefinidamente hasta que el usuario decida no ingresar más pedidos
            while (true) {

                // Se declara una variable llamada codigo con un valor inicial de un string vacío
                let codigo = ' ';

                // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un codigo válido
                do {
                    // Espera a que el usuario ingrese el codigo y lo asigna a la variable 'codigo'
                    codigo = await ingresarCodigo();
                    // Se repite mientras 'codigo' sea un string vacío
                } while (!(codigo !== ''));

                // Se declara una variable llamada nombre con un valor inicial de un string vacío
                let nombre = ' ';
                // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un nombre válido
                do {
                    // Espera a que el usuario ingrese el nombre y lo asigna a la variable 'nombre'
                    nombre = await ingresarNombre();
                    // Se repite mientras 'nombre' sea un string vacío
                } while (!(nombre !== ''));

                // Se declara una variable llamada unidades con un valor inicial de un string vacío
                let unidades = '';

                // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresan unidades válidas
                do {
                    // Espera a que el usuario ingrese el unidades y lo asigna a la variable 'unidades'
                    unidades = await ingresarUnidades();
                    // Se repite mientras 'unidades' sea un string vacío
                } while (!(unidades !== ''));

                // Se declara una variable llamada precio con un valor inicial de un string vacío
                let precio = '';

                // Bucle  que se ejecuta al menos una vez y se repite hasta que se ingresa un precio válido
                do {
                    // Espera a que el usuario ingrese el precio y lo asigna a la variable 'precio'
                    precio = await ingresarPrecio();
                    // Se repite mientras 'precio' sea un string vacío
                } while (!(precio !== ''));

                /*Se declara una función constante que se llama imprimirFactura que es una función flecha y toma 
                como parámetros dos argumentos, nombreCliente y productos*/
                const imprimirFactura = (nombreCliente, productos) => {

                    /*Se imprime un encabezado con un titulo de factura, el nombre del cliente y los encabezados 
                    de los elementos que componen la factura y la interfaz que se le añadio*/
                    console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★                    `.magenta + `FACTURA DE COMPRA`.bgMagenta + `                       ★`.magenta)
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★              `.magenta + `Nombre del cliente: ${nombreCliente}`.green + `                ★`.magenta);
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★   `.magenta + `Código |    Producto    | Cantidad |  Precio |  Total `.cyan + `   ★`.magenta);
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    //Se declara una variable llamada total con un valor inicial de 0
                    let total = 0;
                    // Iterar sobre cada producto del arreglo productos y tomando el costo y la cantidad calcula el subtotal
                    productos.forEach(producto => {
                        //Se declara una variable que guardara el valor subtotal de cada uno de los productos que el usuario solicite
                        const subtotal = producto.unidades * producto.precio;
                        //Se imprimen cada uno de los datos que el usuario ingreso a la hora de realizar el pedido
                        console.log(`★`.magenta + `    ${producto.codigo}    |    ${producto.nombre}    |    ${producto.unidades}    |  ${producto.precio}  |   ${subtotal} `.cyan + `★`.magenta);
                        //Se suma el subtotal de todos los productos añadidos al pedido y los guarda en la variable total
                        total += subtotal;
                    });
                    //Se imprime el valor total de la suma de todos los productos
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                    console.log(`★                     `.magenta + `TOTAL: ${total}`.cyan + `                           ★`.magenta);
                    console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
                };

                //Se agrega el producto al array de productos
                productos.push({
                    //Se asigna el valor de la variable codigo a la propiedad codigo del nuevo objeto.
                    codigo: codigo,
                    //Se asigna el valor de la variable nombre a la propiedad nombre del nuevo objeto.
                    nombre: nombre,
                    //Se asigna el valor de la variable unidades a la propiedad unidades del nuevo objeto.
                    unidades: unidades,
                    //Se asigna el valor de la variable precio a la propiedad precio del nuevo objeto.
                    precio: precio
                });

                // Preguntar si se desea agregar otro pedido
                const continuarPedido = await preguntarOtroPedido();

                /*Verifica si la variable continuarPedido es falsa, lo que significa que el usuario no quiere continuar 
                agregando más productos al pedido actual*/
                if (!continuarPedido) {

                    /* Se llama a la función imprimirFactura pasando los parámetros nombreCliente y productos. Esta 
                    función se utiliza para imprimir una factura con los detalles del cliente y los productos comprados.*/
                    imprimirFactura(nombreCliente, productos);
                    /*Rompe el bucle actual en el que se encuentra, lo que permite finalizar el proceso de agregar 
                    más productos al pedido y continuar con la siguiente sección del código.*/
                    break;
                }
            }
        }
    }

    // Se crea una nueva instancia de la clase ProductosTienda
    let productosTienda = new ProductosTienda();

    // Se cargan los productos desde un archivo y se almacenan en la lista de productos
    productosTienda.cargarArchivoProductos();

    // Se imprime un mensaje indicando los datos al momento de la apertura de la tienda
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.green);
    console.log(`♦  `.green + `Datos Apertura Tienda`.bgGreen + `  ♦`.green);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.green);

    productosTienda.mostrarProductos();

    // Se imprime un mensaje indicando los datos al momento del cierre de la tienda
    console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.magenta);
    console.log(`♦  `.magenta + `Datos Cierre Tienda`.bgMagenta + `  ♦`.magenta);
    console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.magenta);

    productosTienda.mostrarProductos();

    // Se espera a que se complete la función nuevoIngreso antes de continuar
    await productosTienda.nuevoIngreso();

    // Se espera a que se complete la función nuevoPedido antes de continuar
    await productosTienda.nuevoPedido();

};

// Se llama a la función main para iniciar la ejecución del programa
main();