
export class IContacto {
  id: number;
  nombre: string;
  telefono: string;
  email?: string;
  tipo?: number;
  especialidad?: number;
  habitual?: boolean;
  direccion?: string;
  empresa?: string;
  cargo?: string;
  cumple?: Date;
  info?: String;
};


export class Contacto implements IContacto
{
    id: number;
    nombre: string;
    telefono:string;
    email?: string;
    tipo?:number;
    especialidad?: number;
    habitual?:boolean;
    direccion?:string;
    empresa?:string;
    cargo?:string;
    cumple?:Date;
    info?:String;

    constructor(o?:IContacto)
    {
        if(o !== undefined) Object.assign(this,o);
    }
}

export class ViewContacto {
  private static TIPOS: string[] = ["", "Personal", "Trabajo", "Compañero"];
  private static ESPECIALIDAD: string[] = ["", "Desarrollo", "Agile", "DevOps"];

  public static getTipo(contacto: Contacto) {
    return ViewContacto.TIPOS[contacto.tipo];
  }

  public static getEspecialidades(contacto: Contacto) {
    return ViewContacto.ESPECIALIDAD[contacto.especialidad];
  }

  public static getEspecialidad() {
    return ViewContacto.ESPECIALIDAD;
  }

  public static getTipos() {
    return ViewContacto.TIPOS;
  }

  public static getHabitual(contacto: Contacto) {
    return contacto.habitual ? "Sí" : "No";
  }

  public static getCumple(contacto: Contacto) {
    return contacto.cumple;
  }
}

