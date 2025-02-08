import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'menuProyecto';
  toggleDropdown(event: Event): void {
    const dropdown = (event.target as HTMLElement).nextElementSibling;
    if (dropdown && dropdown.classList.contains('dropdown-menu')) {
      dropdown.classList.toggle('visible');
    }
  }
}
//
