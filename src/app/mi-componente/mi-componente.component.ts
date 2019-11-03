import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-mi-componente]',
  template: `
      <div><h1> class Binding</h1><br>
          <h2 class="text-success">Aplicando class class="text-success"</h2>
          <h2 [class]="miClassProperty">Aplicando class binding [class]="miClassProperty"</h2>
          <h2 class="text-danger" [class]="miClassProperty">Aplicando class y [class], solo [class] aplica</h2>
          <h2 [class.text-danger]="miBooleanProperty">Aplicando [class.text-danger]="miBooleanProperty"</h2>
          <h2 [ngClass]="miPropertyVariasClasses">Aplicando [ngClass]="miPropertyVariasClasses"</h2></div>`,
  styles: [`    .text-success {
      color: green;
  }

  .text-danger {
      color: red;
  }

  .text-special {
      font-style: italic;
  }  `]
})
export class MiComponenteComponent implements OnInit {
  public miClassProperty = "text-special";
  public miBooleanProperty = true;
  public hasError = true;
  public isSpecial = true;
  public miPropertyVariasClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }

  constructor() {
  }

  ngOnInit() {
  }

  metodoA() {
    return "valor regresado x metodoA.";
  }
}
