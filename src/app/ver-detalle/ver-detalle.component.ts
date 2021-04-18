import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { Contacto,ViewContacto } from '../contacto';

@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.scss']
})
export class VerDetalleComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,private global:GlobalService) { }
  public id;

  public contacto:Contacto;

  ngOnInit() {
    
    this.route.paramMap.subscribe(params=>{
      //console.log(params['params']);
      this.id =params['params']['id'];
      if(this.id>0)
        this.contacto=this.global.readContacto(this.id);
      else 
        this.contacto=new Contacto();
    })
    
  }

  public getTipos()
  {
    return ViewContacto.getTipos();
  }

  public aceptar()
  {
    if(this.id>0)
      this.global.updateContacto(this.contacto.id,this.contacto);
    else
      this.global.nuevoContacto(this.contacto);

    this.router.navigate(['list/']);
  }

  public cancelar()
  {
    this.router.navigate(['list/']);
  }

}
