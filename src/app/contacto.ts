
export class IContacto {
    id: number;
    nombre: string;
    telefono:string;
    email?: string;
    tipo?:number;
    habitual?:boolean;
    direccion?:string;
    empresa?:string;
    cargo?:string;
    cumple?:Date;    
};


export class Contacto implements IContacto
{
    id: number;
    nombre: string;
    telefono:string;
    email?: string;
    tipo?:number;
    habitual?:boolean;
    direccion?:string;
    empresa?:string;
    cargo?:string;  
    cumple?:Date;

    constructor(o?:IContacto)
    {
        if(o !== undefined) Object.assign(this,o);
    }   
}

export class ViewContacto{
       
    private static TIPOS:string[]=['','Personal','Trabajo','Compañero'];
        
    public static getTipo(contacto:Contacto)
    {
        return ViewContacto.TIPOS[contacto.tipo];
    }

    public static getTipos()
    {
        return ViewContacto.TIPOS;
    }
    
    public static getHabitual(contacto:Contacto)
    {
        return (contacto.habitual)?"Sí":"No";
    }    
}

