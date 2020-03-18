
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.scss']
})
export class ListComponent implements OnInit {

  productos: any[];

  constructor() {
    const producto1 = {
      nombre: 'Aceitunas',
      descripcion: 'Verde y redonda.',
      comprado: false
    };
    const producto2 = {
      nombre: 'Cacahuetes',
      descripcion: 'Manises redondos.',
      comprado: false
    };

    const producto3 = {
      nombre: 'Patatillas',
      descripcion: 'Patatas fritas con forma ondulada.',
      comprado: false
    };

    const producto4 = {
      nombre: 'Pistachos',
      descripcion: 'Fruto seco.',
      comprado: false
    };

    const producto5 = {
      nombre: 'Almendras',
      descripcion: 'Fruto seco del almendro.',
      comprado: false
    };

    const producto6 = {
      nombre: 'Pipas',
      descripcion: 'Semillas de girasol saladas.',
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
