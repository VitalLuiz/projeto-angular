import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  name: string = 'Luiz'
  age: number = 30
  job: string = 'Auxiliar administrativo'
  funcoes = Array("Organizar docs", "Concertar computadores")
}
