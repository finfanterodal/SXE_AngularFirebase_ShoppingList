import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';
import {auth} from 'firebase';
import {FireDBService} from './fire-db.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  email = '';
  pass = '';
  emailAuth = false;
  googleAuth = false;
  authUser = null;

  constructor(public authApp: AngularFireAuth,
              public dbApp: FireDBService) {
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
    this.emailAuth = true;
    this.authApp.auth.signInWithEmailAndPassword(this.email, this.pass)
      .then(user => {
        console.log('user: ', user);
        this.email = '';
        this.pass = '';
      })
      .catch(error2 => {
        console.log('error en email login: ', error2);
      });
  }

  glogin() {
    console.log('gogle login!');
    this.googleAuth = true;
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
    this.googleAuth = false;
    this.emailAuth = false;
    this.authApp.auth.signOut();
  }

}
