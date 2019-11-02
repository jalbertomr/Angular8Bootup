import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-mi-componente]',
  template: `<div><h1> Property binding</h1><br>
             <input [id]="miClassProperty" type="text" value="Bext">
             <input bind-disabled="isDisabled" id={{miClassProperty}} type="text" value="Bext">
            </div>`,
  styles: []
})
export class MiComponenteComponent implements OnInit {

  public miValor = "valorXX";
  public miClassProperty = 12345;
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  metodoA() {
    return "valor regresado x metodoA.";
  }
}
