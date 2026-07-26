import { Component } from '@angular/core';
import { NgStyle, NgClass } from '@angular/common';

@Component({
  selector: 'app-diretiva',
  imports: [NgStyle, NgClass],
  templateUrl: './diretiva.html',
  styleUrl: './diretiva.css',
})
export class Diretiva {
  size = 40
  font = 'Arial'
  color = 'red'

  classes = ['italico', 'font-size-grande']
  underline = 'underline'
}
