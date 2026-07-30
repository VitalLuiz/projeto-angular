import { Component } from '@angular/core';
import { Animal } from '../interfaces/Animal'
import { List } from '../service/list';

@Component({
  selector: 'app-list-render',
  imports: [],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {
  animalInformations: string = ''

  constructor(private animaisLista: List){

  }

  ngOnInit() {
    this.animaisLista.getAnimal().subscribe(dados => {
    console.log(dados);
    });
  }
}
