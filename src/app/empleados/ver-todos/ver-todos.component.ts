import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PerfilEmpleadoComponent } from './perfil-empleado/perfil-empleado.component';

@Component({
  selector: 'app-ver-todos',
  imports: [RouterOutlet, RouterLink, PerfilEmpleadoComponent],
  templateUrl: './ver-todos.component.html',
  styleUrl: './ver-todos.component.css'
})
export class VerTodosComponent {

}
//
//
