import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,ActivatedRoute,NavigationStart } from '@angular/router';
import { GlobalService } from '../global.service';
import { Contacto,ViewContacto } from '../contacto';
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-ver-info",
  templateUrl: "./ver-info.component.html",
  styleUrls: ["./ver-info.component.scss"],
})
export class VerInfoComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private global: GlobalService,
    private datePipe: DatePipe
  ) {}

  public contacto: Contacto;

  public id;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      //console.log(params['params']);
      this.id = params["params"]["id"];
      if (this.id >= 0) this.contacto = this.global.readContacto(this.id);
      else this.contacto = new Contacto();
    });
  }

  public volver() {
    this.router.navigate(["list/"]);
  }

  public getCumple(o: Contacto) {
    return this.datePipe.transform(ViewContacto.getCumple(o), "dd-MM-yyyy");
  }

  public getTipo(o: Contacto) {
    return ViewContacto.getTipo(o);
  }
  public getEspecialidad(o: Contacto) {
    return ViewContacto.getEspecialidades(o);
  }
}
