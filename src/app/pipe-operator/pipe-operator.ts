import { Component } from '@angular/core';
import { CommonModule, DatePipe, UpperCasePipe } from '@angular/common'

@Component({
  selector: 'app-pipe-operator',
  imports: [UpperCasePipe, DatePipe],
  standalone: true,
  templateUrl: './pipe-operator.html',
  styleUrl: './pipe-operator.css',
})
export class PipeOperator {
  data = new Date()
}


