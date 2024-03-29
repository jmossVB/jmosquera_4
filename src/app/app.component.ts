import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from './tools/cabecera/cabecera.component';
import { PieComponent } from './tools/pie/pie.component';
import { HomeComponent } from './tools/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CabeceraComponent,PieComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jmosquera_4';
}
