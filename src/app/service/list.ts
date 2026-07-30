import { Service } from '@angular/core';
import { Animal } from '../interfaces/Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class List {

    constructor(private http: HttpClient){}

    remove(animals: Animal[], animal: Animal){
        return animals.filter(a => animal.name !== a.name)
    }

    getAnimal(){
        return this.http.get<Animal[]>('http://localhost:3000/animals')
    }
}
