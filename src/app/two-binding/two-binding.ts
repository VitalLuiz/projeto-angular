import { Component } from '@angular/core';
import { importsCompartilhados } from '../importsCompartilhados';

@Component({
  selector: 'app-two-binding',
  imports: [ ...importsCompartilhados ],
  standalone: true,
  templateUrl: './two-binding.html',
  styleUrl: './two-binding.css',
})
export class TwoBinding {
  name: string = ''
}
