import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AfterViewInit } from '@angular/core';

declare const $: any; //En teoria sirve para declarar que estoy usando jQuery

@Component({
  selector: 'app-citas',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './citas.component.html',
  styleUrl: './citas.component.css'
})
export class CitasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Inicializar DataTables
    $('#citas').DataTable();
  }
}
