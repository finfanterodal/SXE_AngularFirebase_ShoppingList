import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {auth} from 'firebase';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  email = '';
  pass = '';
  authUser = null;

  constructor(public authApp: AngularFireAuth) {
  }

  /*Observable para ver el estado de la sesión del usuario*/
  user = this.authApp.authState.pipe(map(authState => {
    console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }));

  login() {
    console.log('email login!');
    this.authApp.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then(user => {
        console.log('user: ', user);
      })
      .catch(error2 => {
        console.log('error en email login: ', error2);
      });
  }

  glogin() {
    console.log('gogle login!');
    this.authApp.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(user => {
        console.log('user: ', user);
      })
      .catch(error2 => {
        console.log('error en google login: ', error2);
      });
  }

  logout() {
    console.log('logout!');
    this.authApp.auth.signOut();
  }
}
