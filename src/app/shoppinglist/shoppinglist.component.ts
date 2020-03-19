import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FireDBService} from '../fire-db.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ListComponent implements OnInit {

  productos: any[6];

  constructor(public authApp: AngularFireAuth,
              public dbApp: FireDBService) {
    /*Añadimos productos a la vase de datos*/
    dbApp.añadirProducto('Aceitunas', 'Aceitunas');
    dbApp.añadirProducto('Cacahuetes', 'Cacahuetes');
    dbApp.añadirProducto('Patatillas', 'Patatillas');
    dbApp.añadirProducto('Pistachos', 'Pistachos');
    dbApp.añadirProducto('Almendras', 'Almendras');
    dbApp.añadirProducto('Pipas', 'Pipas');

    const producto1 = {
      nombre: 'Aceitunas',
      comprado: false
    };
    const producto2 = {
      nombre: 'Cacahuetes',
      comprado: false
    };

    const producto3 = {
      nombre: 'Patatillas',
      comprado: false
    };

    const producto4 = {
      nombre: 'Pistachos',
      comprado: false
    };

    const producto5 = {
      nombre: 'Almendras',
      comprado: false
    };

    const producto6 = {
      nombre: 'Pipas',
      comprado: false
    };
    this.productos = [];
    this.productos.push(producto1);
    this.productos.push(producto2);
    this.productos.push(producto3);
    this.productos.push(producto4);
    this.productos.push(producto5);
    this.productos.push(producto6);
  }

  ngOnInit() {
  }

  /**
   * Cuando el usuario pulsa un producto este se cambia de estado y se guarda en la lista de la base de datos.
   * @param int numero de producto seleccionado
   * @param uid uid del usuario logeado
   */
  onClickComprar(int, uid: string) {
    this.dbApp.lista[int].comprado = true;
    this.dbApp.listaUsuario(uid, this.dbApp.lista);
  }

  /**
   * Cuando el usuario pulsa un producto este se cambia de estado y se guarda en la lista de la base de datos.
   * @param int numero de producto seleccionado
   * @param uid uid del usuario logeado
   */
  onClickComprado(int, uid: string) {
    this.dbApp.lista[int].comprado = false;
    this.dbApp.listaUsuario(uid, this.dbApp.lista);
  }

  /**
   * Cuando el usuario pulsa un producto este se cambia de estado y se guarda en la lista de la base de datos,
   * * en este caso la lista que se utiliza de base es la local, porque el usuario se supono que no estaba registrado y no había datos.
   * @param int numero de producto seleccionado
   * @param uid uid del usuario logeado
   */
  onClickComprar2(int, uid: string) {
    this.productos[int].comprado = true;
    this.dbApp.listaUsuario(uid, this.productos);
  }

  /**
   * Cuando el usuario pulsa un producto este se cambia de estado y se guarda en la lista de la base de datos,
   * en este caso la lista que se utiliza de base es la local, porque el usuario se supono que no estaba registrado y no había datos.
   * @param int numero de producto seleccionado
   * @param uid uid del usuario logeado
   */
  onClickComprado2(int, uid: string) {
    this.productos[int].comprado = false;
    this.dbApp.listaUsuario(uid, this.productos);
  }
}
