import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PerfilEmpleadoComponent } from './ver-todos/perfil-empleado/perfil-empleado.component';

@Component({
  selector: 'app-empleados',
  imports: [RouterOutlet,RouterLink, PerfilEmpleadoComponent],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

}
//
//
