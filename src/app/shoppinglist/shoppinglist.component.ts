import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {FireDBService} from '../fire-db.service';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ListComponent implements OnInit {

  productos: any[];

  constructor(public authApp: AngularFireAuth,
              public dbApp: FireDBService) {
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


}
