require('colors');
const fs = require('fs');

const datosArchivo = require('./datos.json');

const { mostrarMenu, digitarCodigo, digitarNombre, digitarInventario, digitarPrecio, pausa, preguntarOtroProducto, mostrarMenuPedido,
  ingresarNombreCliente, ingresarCodigo, ingresarNombre, ingresarUnidades, ingresarPrecio, pausa1, preguntarOtroPedido,} = require('./proy_modules/menu.js');

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
        });
      } else {
        console.log(`Error, el archivo datos.json no contiene datos\n`.bgYellow);
      }
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.red);
      console.log(`♦ `.red + `Total de productos cargados ==> `.bgRed + ` ${contador}`.bgRed + ` ♦`.red);
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.red);
    }

    grabaArchivoProductos() {

      const instanciaClaseAObjetos = this.getListaProductos.map(producto => {
        return {
          codigoProducto: producto.getCodigoProducto,
          nombreProducto: producto.getNombreProducto,
          inventarioProducto: producto.getInventarioProducto,
          precioProducto: producto.getPrecioProducto
        };
      });

      const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);

      const nombreArchivo = 'datos.json';

      fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');

      console.log(`\n♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦`.cyan);
      console.log(`♦   `.cyan + `Datos guardados en ${nombreArchivo}`.bgCyan + `   ♦`.cyan);
      console.log(`♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦♦\n`.cyan);
    }

    mostrarProductos() {
      this.getListaProductos.forEach(producto => {
        console.log(`­♦    `.yellow + producto.getCodigoProducto + `     ­♦   `.yellow
          + producto.getNombreProducto + `      ­♦   `.yellow +
          +  producto.getInventarioProducto + `      ­♦   `.yellow +
          +  producto.getInventarioProducto + `       ­♦   `.yellow +
          +  producto.getPrecioProducto + `     ­♦   `.yellow);
      })
    }

    nuevoIngreso = async () => {

      let option = ' ';
      do {
        do {
          option = await mostrarMenu();
        } while (!(option >= '0' && option <= '1'));

        if (option !== '1') {
          console.log(`\nSe ejecuta el proceso ${option}`);
          await pausa();
        }
      } while (option !== '1');

      while (true) {
        let codigo = ' ';
        do {
          do {
            codigo = await digitarCodigo();
          } while (!(codigo !== ''));
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
          } while (!(inventario !== 0));
        } while (option !== '1');

        let precio = 0;
        do {
          do {
            precio = await digitarPrecio();
          } while (!(precio !== 0));
        } while (option !== '1');

        const producto = new Producto();

        producto.setCodigoProducto = codigo;
        producto.setNombreProducto = nombre;
        producto.setInventarioProducto = inventario;
        producto.setPrecioProducto = precio;

        this.guardarProducto(producto);

        const continuar = await preguntarOtroProducto();

        if (!continuar) {
          break;
        }
      }
    }

    guardarProducto(producto) {
      try {
        if (producto !== null && producto !== undefined) {
          this.#listaProductos.push(producto);
        } else {
          console.error('El producto es null o undefined y no se guardará en datos.json');
          return;
        }

        const instanciaClaseAObjetos = this.#listaProductos.map(producto => {
          return {
            codigoProducto: producto.getCodigoProducto,
            nombreProducto: producto.getNombreProducto,
            inventarioProducto: producto.getInventarioProducto,
            precioProducto: producto.getPrecioProducto
          };
        });

        const cadenaJson = JSON.stringify(instanciaClaseAObjetos, null, 2);

        const nombreArchivo = 'datos.json';

        fs.writeFileSync(nombreArchivo, cadenaJson, 'UTF-8');
      } catch (error) {
        console.error('Error al guardar el producto:', error.message);
      }
    }

    nuevoPedido = async () => {

    const productos = [];
      let option1 = ' ';
      do {
        do {
          option1 = await mostrarMenuPedido();
        } while (!(option1 >= '0' && option1 <= '1'));

        if (option1 !== '1') {
          console.log(`\nSe ejecuta el proceso ${option1}`.green);
          await pausa1();
        }
      } while (option1 !== '1');

      let nombreCliente = ' ';
      do {
        do {
          nombreCliente = await ingresarNombreCliente();
        } while (!(nombreCliente !== ''));
      } while (option1 !== '1');

      while (true) {
        let codigo = ' ';
        do {
          do {
            codigo = await ingresarCodigo();
          } while (!(codigo !== ''));
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

        const imprimirFactura = (nombreCliente, productos) => {
            console.log(`\n★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★                    `.magenta + `FACTURA DE COMPRA`.bgMagenta + `                       ★`.magenta) 
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★              `.magenta +`Nombre del cliente: ${nombreCliente}`.green + `                ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★   `.magenta +`Código |    Producto    | Cantidad |  Precio |  Total `.cyan + `   ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            let total = 0;
            productos.forEach(producto => {
              const subtotal = producto.unidades * producto.precio;
              console.log(`★`.magenta +`    ${producto.codigo}    |    ${producto.nombre}    |    ${producto.unidades}    |  ${producto.precio}  |   ${subtotal} `.cyan + `★`.magenta);
              total += subtotal;
            });
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
            console.log(`★                     `.magenta + `TOTAL: ${total}`.cyan + `                           ★`.magenta);
            console.log(`★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★`.magenta);
          };

          productos.push({
            codigo: codigo,
            nombre: nombre,
            unidades: unidades,
            precio: precio
          });
  
          const continuarPedido = await preguntarOtroPedido();
  
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

  productosTienda.grabaArchivoProductos();

  await productosTienda.nuevoIngreso();

  await productosTienda.nuevoPedido();

};

main();