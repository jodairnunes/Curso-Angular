import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  templateUrl: './primeiro-componente.component.html',
  styleUrls: ['./primeiro-componente.component.css']
})
export class PrimeiroComponenteComponent {
  name: string = 'Arthur Nunes';
  age: number = 37;
  job = 'Programador';
  hobbies = ['Correr', 'Pedalar', 'Estudar'];
  car = {
    name: 'Polo',
    year: 2019,
  }
}
