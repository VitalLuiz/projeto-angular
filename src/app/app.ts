import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from "./login/login";
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";
import { Header } from './header/header';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto-angular');
  username: string = "Joaquim";
  userdata = {
    Gmail: 'joaquim@gmail.com',
    senha: 'joaquim123'
  }
}
