import { Component } from '@angular/core';
import { Animal } from '../interfaces/Animal'

@Component({
  selector: 'app-list-render',
  imports: [],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css',
})
export class ListRender {
  animalInformations: string = ''

  animals: Animal[] = [
    {name: 'Turca', type: 'dog', age: 4},
    {name: 'Tom', type: 'cat', age: 5},
    {name: 'Frida', type: 'dog', age: 10},
    {name: 'Bob', type: 'horse', age: 21}
  ]

  mostrarIdade(animal: Animal){
    this.animalInformations = `O animal ${animal.name} tem ${animal.age} anos!`
  }
}
