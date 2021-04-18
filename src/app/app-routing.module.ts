import { NgModule } from '@angular/core';
import { Routes, Router,RouterModule } from '@angular/router';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component';
import { ListadoComponent } from './listado/listado.component';
import { SalidaComponent } from './salida/salida.component';
import { PrincipalComponent } from './principal/principal.component';


const routes: Routes = [{path:'list',component:ListadoComponent},
                        {path:'principal',component:PrincipalComponent},
                        {path:'',redirectTo:'/principal',pathMatch:'full'},
                        {path:'salida',component:SalidaComponent},
                        {path:'edit/:id',component:VerDetalleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
