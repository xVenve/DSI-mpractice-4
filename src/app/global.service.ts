import { Injectable } from '@angular/core';
import { IContacto,Contacto,ViewContacto } from './contacto';

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor() {}

  public datos: Contacto[] = [
    {
      id: 0,
      nombre: "Ricardo Martín Manso",
      telefono: "609117799",
      email: "ricardma@inf.uc3m.es",
      tipo: 2,
      especialidad: 3,
      habitual: true,
      direccion: "Calle de la Luna",
      empresa: "",
      cumple: new Date("1963-08-03"),
      cargo: "Director",
    },
    {
      id: 1,
      nombre: "Jesús Hernando Corrochano",
      telefono: "609117788",
      email: "jhcorroc@inf.uc3m.es",
      tipo: 1,
      habitual: true,
      direccion: "",
      empresa: "",
      cumple: new Date("1995-09-13"),
      cargo: "",
    },
    {
      id: 2,
      nombre: "Manolo el del Bombo",
      telefono: "609667429",
      email: "manolo@inf.uc3m.es",
      tipo: 1,
      habitual: false,
      direccion: "Calle Duero, nº 13, 2ºA",
      empresa: "",
      cumple: new Date("1978-04-15"),
      cargo: "",
    },
    {
      id: 3,
      nombre: "María Lopez",
      telefono: "609776699",
      email: "marialopez@inf.uc3m.es",
      tipo: 2,
      especialidad: 1,
      habitual: true,
      direccion: "Calle Salinas",
      empresa: "UC3m",
      cumple: new Date("2000-11-12"),
      cargo: "Profesora",
      info: "Llamar en caso de emergencia.",
    },
    {
      id: 4,
      nombre: "Clara de Juan Pastor",
      telefono: "650117799",
      email: "claradejuanpastor@inf.uc3m.es",
      tipo: 1,
      habitual: false,
      direccion: "",
      empresa: "",
      cumple: new Date("1984-05-02"),
      cargo: "Secretaria",
    },
  ];

  public readContacto(id: number): Contacto {
    return new Contacto(this.datos[id]);
  }

  public eliminar(id) {
    console.log("Eliminando:" + id);
    this.datos.splice(id, 1);
    let i = 0;
    for (let dato of this.datos) {
      dato.id = i;
      i++;
    }
  }

  public updateContacto(id: number, contacto: Contacto) {
    this.datos[id] = contacto;
  }

  public nuevoContacto(contacto: Contacto) {
    contacto.id = this.datos.length;
    this.datos.push(contacto);
  }

  public getNContactos() {
    return this.datos.length;
  }
}
