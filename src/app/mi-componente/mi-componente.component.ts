import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> *ngSwitch Directive</h1><br>
          <textarea disabled><div [ngSwitch]="miPropertyCaseOptions">
              <div *ngSwitchCase="'rojo'"><h3>ALERTA</h3></div>
              <div *ngSwitchCase="'azul'"><h3>CIELO</h3></div>
              <div *ngSwitchCase="'verde'"><h3>ARBOL</h3></div>
              <div *ngSwitchDefault><h3>VALOR NO IDENTIFICADO</h3></div>
          </div>
          </textarea><br>
          <h3>miPropertyCaseOptions  = {{miPropertyCaseOptions}}</h3>
          <div [ngSwitch]="miPropertyCaseOptions">
              <div *ngSwitchCase="'rojo'"><h3>ALERTA</h3></div>
              <div *ngSwitchCase="'azul'"><h3>CIELO</h3></div>
              <div *ngSwitchCase="'verde'"><h3>ARBOL</h3></div>
              <div *ngSwitchDefault><h3>VALOR NO IDENTIFICADO</h3></div>
          </div>
          <button (click)="cambio()">Alternar</button>
      </div>`,
  styles: []
})

export class MiComponenteComponent implements OnInit {
  public miPropertyCaseOptions = "rojo";

  constructor() {
  }

  cambio() {
    console.log("IN cambio()");
    var arrColors = ['rojo','azul','verde','amarillo','blanco'];
    console.log(Math.trunc((Math.random()*arrColors.length)));

    this.miPropertyCaseOptions = arrColors[Math.trunc((Math.random()*arrColors.length))];
    //  this.miPropertyCaseOptions = false :
    //  this.miPropertyCaseOptions = true;
    console.log("this.miPropertyCaseOptions: " + this.miPropertyCaseOptions);
  }

  ngOnInit() {
  }

}
