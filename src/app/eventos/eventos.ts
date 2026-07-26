import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  imports: [],
  templateUrl: './eventos.html',
  styleUrl: './eventos.css',
})
export class Eventos {
  private show: boolean = false;

  getShow(){
    return this.show
  }
  setShow(newvalor: boolean): void{
    this.show = newvalor
  }

  showMensage(){
    let showp = this.getShow()
    if(showp === false){
      this.setShow(true);
    }else{
      this.setShow(false)
    }
  }
}
