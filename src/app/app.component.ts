import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  displayedColumns:string[] = ['Nombre', 'Telefono', 'Email', 'Tipo', 'Habitual'];
  dataSource = new MatTableDataSource(CONTACTOS);
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 
}

export interface ContactElement {
  nombre: string;
  telefono: string
  email: string;
  tipo: string;
  habitual: string;
}

const CONTACTOS: ContactElement[] = [
  {nombre: 'Raul', telefono: '606060606', email: '100405861@alumnos.uc3m.es', tipo: 'trabajo', habitual: 'si'},
  {nombre: 'Reda', telefono: '606060606', email: '100405861@alumnos.uc3m.es', tipo: 'trabajo', habitual: 'si'},
  {nombre: 'Carlos', telefono: '606060606', email: '100405861@alumnos.uc3m.es', tipo: 'trabajo', habitual: 'si'},
  {nombre: 'Jorge', telefono: '606060606', email: '100405861@alumnos.uc3m.es', tipo: 'trabajo', habitual: 'si'}
];

