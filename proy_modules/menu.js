//Se crea una función constante que es una función flecha llamada mostrarMenu
const mostrarMenu = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {
        // Muestra el menú en la consola con opciones para aceptar o cancelar
        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.blue);
        console.log(`♦  `.blue + `INGRESO NUEVO PRODUCTO`.cyan + `  ♦`.blue)
        console.log(`♦     `.blue + `Elija una opción`.cyan + `     ♦`.blue)
        console.log(`♦               `.blue + `           ♦`.blue)
        console.log(`♦        `.blue + `${'1.'.yellow} Aceptar`.cyan + `        ♦`.blue);
        console.log(`♦        `.blue + `${'0.'.yellow} Cancelar`.cyan + `       ♦`.blue);
        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.blue);

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });
        // Pregunta al usuario si desea ingresar un nuevo producto
        readLine.question(`\n¿Desea ingresar un nuevo producto?`.red, (opt) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con la opción seleccionada por el usuario
            resolve(opt);
        })
    })
};

//Se crea una función constante que es una función flecha llamada pausa
const pausa = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        })

        // Se le pide al usuario que presione ENTER para continuar
        readLine.question(`\n Presione ${'ENTER'} para continuar\n`.green, (opt) => {
            // Una vez que el usuario presiona ENTER, se cierra la interfaz de lectura y se resuelve la promesa
            readLine.close();
            resolve(opt);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarCodigo
const digitarCodigo = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el código del producto
        readLine.question(`\nDigite el código del producto ►  `.green, (codigoProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el código del producto ingresado por el usuario
            resolve(codigoProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarNombre
const digitarNombre = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el nombre del producto
        readLine.question(`\nDigite el nombre del producto ►   `.green, (nombreProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el nombre del producto ingresado por el usuario
            resolve(nombreProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarInventario
const digitarInventario = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el inventario del producto
        readLine.question(`\nDigite el inventario del producto ►  `.green, (inventarioProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el inventario del producto ingresado por el usuario
            resolve(inventarioProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada digitarPrecio
const digitarPrecio = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el precio del producto
        readLine.question(`\nDigite el precio del producto ►  `.green, (precioProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el precio del producto ingresado por el usuario
            resolve(precioProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada preguntarOtroProducto
const preguntarOtroProducto = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Pregunta al usuario si desea ingresar otro producto
        readLine.question(`\n¿Desea ingresar otro producto? (SI/NO) `.red, (respuesta) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con un valor dado por el usuario que indica si la respuesta en mayúsculas es igual a 'SI'
            resolve(respuesta.toUpperCase() === 'SI');
        });
    });
};

//Se crea una función constante que es una función  flecha llamada mostrarMenuPedido
const mostrarMenuPedido = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Muestra el menú de nuevo ingreso de pedido en la consola con opciones para aceptar o cancelar
        console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.yellow);
        console.log(`♦   `.yellow + `INGRESO NUEVO PEDIDO`.cyan + `  ♦`.yellow)
        console.log(`♦     `.yellow + `Elija una opción`.cyan + `    ♦`.yellow)
        console.log(`♦        `.yellow + `${'1.'.red} Aceptar` + `       ♦`.yellow);
        console.log(`♦        `.yellow + `${'0.'.red} Cancelar` + `      ♦`.yellow);
        console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.yellow);

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Pregunta al usuario si desea ingresar otro producto
        readLine.question(`\n¿Desea ingresar un nuevo pedido? `.red, (opt1) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con la opción seleccionada por el usuario
            resolve(opt1);
        })
    })
};

//Se crea una función constante que es una función flecha llamada pausa1
const pausa1 = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        })

        // Se le pide al usuario que presione ENTER para continuar
        readLine.question(`\n Presione ${'ENTER'} para continuar\n`.green, (opt1) => {
            // Una vez que el usuario presiona ENTER, se cierra la interfaz de lectura y se resuelve la promesa
            readLine.close();
            resolve(opt1);
        })
    })
};

//Se crea una funciónconstante que es una función flecha llamada ingresarNombreCliente
const ingresarNombreCliente = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Pregunta al usuario cúal es el nombre del cliente
        readLine.question(`\n¿Cual es el nombre del cliente? ►  `.green, (nombreCliente) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Resuelve la promesa con el nombre del cliente ingresado por el usuario
            resolve(nombreCliente);
        })
    })
};

//Se crea una función constante que es una función flecha llamada ingresarCodigo
const ingresarCodigo = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el código del producto que desea
        readLine.question(`\nIngrese el código del producto ►  `.green, (codigoProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el código del producto ingresado por el usuario
            resolve(codigoProducto);
        })
    })
};

//Se crea una función constante que es una función  flecha llamada ingresarNombre
const ingresarNombre = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el nombre del producto que desea
        readLine.question(`\nIngrese el nombre del producto ►   `.green, (nombreProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el nombre del producto ingresado por el usuario
            resolve(nombreProducto);
        })
    })
};

//Se crea una función constante que es una función  flecha llamada ingresarUnidades
const ingresarUnidades = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese la cantidad de unidades del producto que desea
        readLine.question(`\nIngrese la cantidad ►  `.green, (inventarioProducto) => {
            readLine.close();
            // Se resuelve la promesa con el inventario del producto ingresado por el usuario
            resolve(inventarioProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada ingresarPrecio
const ingresarPrecio = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Solicita al usuario que ingrese el precio del producto que desea
        readLine.question(`\nIngrese el precio del producto ►  `.green, (precioProducto) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con el precio del producto ingresado por el usuario
            resolve(precioProducto);
        })
    })
};

//Se crea una función constante que es una función flecha llamada preguntarOtroPedido
const preguntarOtroPedido = () => {

    // Retorna una nueva promesa que se resuelve con el valor proporcionado en la función 'resolve'
    return new Promise(resolve => {

        // Crea una interfaz de lectura en la consola para permitir la entrada del usuario
        const readLine = require('readline').createInterface({
            // Define el flujo de entrada, para leer la entrada del usuario desde la consola
            input: process.stdin,
            //Define el flujo de salida, para mostrar mensajes en la consola
            output: process.stdout
        });

        // Pregunta al usuario si desea ingresar otro pedido
        readLine.question(`\n¿Desea ingresar otro pedido? (SI/NO) `.red, (respuesta1) => {
            // Se cierra la interfaz de lectura
            readLine.close();
            // Se resuelve la promesa con un valor dado por el usuario que indica si la respuesta en mayúsculas es igual a 'SI'
            resolve(respuesta1.toUpperCase() === 'SI');
        });
    });
};

// Exporta un objeto que contiene varias funciones utilizadas en el módulo app.js
module.exports = {
    mostrarMenu,
    digitarCodigo,
    digitarNombre,
    digitarInventario,
    digitarPrecio,
    pausa,
    preguntarOtroProducto,
    mostrarMenuPedido,
    ingresarNombreCliente,
    ingresarCodigo,
    ingresarNombre,
    ingresarUnidades,
    ingresarPrecio,
    pausa1,
    preguntarOtroPedido,
};