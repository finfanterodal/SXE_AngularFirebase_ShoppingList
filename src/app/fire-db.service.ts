import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {isBoolean} from 'util';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {
  altaUser = false;
  lista = [];
  listaAux = false;

  constructor(private db: AngularFireDatabase) {
  }

  /**
   * Crea entrada según la uid del usuario
   * @param usuarioNuevoCorreo correo del usuario, dato para la entrada uid
   * @param usuarioNuevoUID entrada nueva
   */
  altausuario(usuarioNuevoCorreo: string, usuarioNuevoUID: string) {
    this.db.object('users/userUID/' + usuarioNuevoUID.toString()).update({correo: usuarioNuevoCorreo});
    this.altaUser = true;
    console.log('Insertado uid');
  }

  /**
   * Crea entrada según la uid del usuario
   * @param nombre clave del producto por nombre
   * @param nombreProducto valor nombre del producto
   */
  añadirProducto(nombre: string, nombreProducto: string) {
    this.db.object('productos/' + nombre).update({producto: nombreProducto});
    console.log('Insertado producto');
  }

  /**
   * Crea entrada según la uid del usuario
   * @param uidUsuario uid usuario logeado
   * @param listaProductos array de productos del usuario en concreto
   */
  listaUsuario(uidUsuario: string, listaProductos: []) {
    this.db.object('users/userUID/' + uidUsuario.toString()).update({Lista: listaProductos});
    console.log('Insertado');
  }

  /**
   * Borra la entrada segun el UID del usuario
   * @param uidBorrar uid del usuario logueado
   */
  bajausuario(uidBorrar: string) {
    // boora entrada
    this.db.object('users/userUID/' + uidBorrar).remove();
    this.altaUser = false;
  }

  /**
   * Devuelve los uid de usuarios
   */
  getDatosUsers() {
    return this.db.list('users/userUID/').snapshotChanges();
  }

  /**
   * Selecciona los productos del usuario
   * @param uid uid usuario logeado
   * @param listaProductos array de productos del usuario en concreto
   */
  getProductos(uid: string) {
    this.listaAux = true;
    this.db.list('users/userUID/' + uid + '/Lista_productos/').snapshotChanges().subscribe(result => {
      this.lista = [];
      result.forEach(l => {
        this.listaAux = false;
        const listap: any = l.payload.val();

        this.lista.push(listap);
        console.log(l);
      });
      console.log(this.lista);
    });
    return this.lista;
  }
}
