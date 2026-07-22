import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login{
  aparecer_mensagem(): void{
    alert("Login realizado com sucesso!");
  }

  name = input<string>();
  userdata = input<object>();
}
