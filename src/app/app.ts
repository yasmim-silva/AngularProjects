import { Component } from '@angular/core';
import { Calculadora } from './calculadora/calculadora'
//import { RouterOutlet } from '@angular/router';
//import { Minhapagina } from './minhapagina/minhapagina'
//import { HelloWorldComponent } from './helloworld/helloworld.component'

@Component({
  selector: 'app-root',
  imports: [ Calculadora ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'conceitos-basicos';
}
