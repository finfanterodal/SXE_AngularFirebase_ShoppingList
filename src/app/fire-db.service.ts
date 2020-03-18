import {Injectable} from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireDBService {

  constructor(private db: AngularFireDatabase) {
  }

  /**
   * Crea entrada según la uid del usuario
   * @param usuarioNuevoCorreo correo del usuario, dato para la entrada uid
   * @param usuarioNuevoUID entrada nueva
   */
  altausuario(usuarioNuevoCorreo: string, usuarioNuevoUID: string) {
    this.db.object('users/userUID/' + usuarioNuevoUID.toString()).update({correo: usuarioNuevoCorreo});
    console.log('Insertado uid');
  }

  /**
   * Borra la entrada segun el UID del usuario
   * @param uidBorrar uid del usuario logueado
   */
  bajausuario(uidBorrar: string) {
    // boora entrada
    this.db.object('users/userUID/' + uidBorrar).remove();
  }
}
