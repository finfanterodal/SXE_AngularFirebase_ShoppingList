import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicioDeAutentService {

  constructor(public auth: AngularFireAuth) {
  }

  /*Observable para ver el estado de la sesión del usuario*/
  user = this.auth.authState.pipe(map(authState => {
    console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }));

  login() {
    console.log('login!');
  }

  glogin() {
    console.log('gogle login!');
  }

  logout() {
    console.log('logout!');
  }
}
