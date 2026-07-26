import { Component, output, EventEmitter, numberAttribute} from '@angular/core';

@Component({
  selector: 'app-change-number',
  imports: [],
  templateUrl: './change-number.html',
  styleUrl: './change-number.css',
})
export class ChangeNumber {
  changeNumber = output()
  numero =  10;

  onclick(){
    
    this.changeNumber.emit()
  }
}
