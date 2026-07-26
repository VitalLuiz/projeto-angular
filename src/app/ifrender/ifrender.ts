import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-ifrender',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './ifrender.html',
  styleUrl: './ifrender.css',
})
export class Ifrender {
  canShow: boolean = true;
  nome = 'matheus'
}
