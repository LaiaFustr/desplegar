import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CitasComponent } from '../citas/citas.component';

@Component({
  selector: 'app-login',
  imports: [RouterOutlet, RouterLink, CitasComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
