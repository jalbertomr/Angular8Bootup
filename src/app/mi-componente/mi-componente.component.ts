import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> style Binding</h1><br>
          <h2 [style.color]="'orange'">Aplicando [style.color]="'orange'"</h2>
          <h3>miBooleanProperty = {{miBooleanProperty}}</h3>
          <h2 [style.color]="miBooleanProperty ? 'green' : 'red'">Aplicando [style.color]="miBooleanProperty ? 'green' :
              'red'"</h2>
          <h3>miColorProperty = {{miColorProperty}}</h3>
          <h2 [style.color]="miColorProperty">Aplicando [style.color]="miColorProperty"</h2>
          <h3>miPropertyVariosStyles = {{miPropertyVariosStyles.color}},{{miPropertyVariosStyles.fontStyle}}</h3>
          <h2 [ngStyle]="miPropertyVariosStyles">Aplicando [ngStyle]="miPropertyVariosStyles"</h2>
          <button (click)="Cambia()"><h2>Cambia property values -> styles</h2></button>
      </div>`,
  styles: []
})
export class MiComponenteComponent implements OnInit {
  public miColorProperty = "blue";
  public miBooleanProperty = true;
  public miPropertyVariosStyles = {color: this.miColorProperty, fontStyle: "italic"};

  constructor() {
  }

  ngOnInit() {
  }

  metodoA() {
    return "valor regresado x metodoA.";
  }

  Cambia() {
    this.miBooleanProperty = !this.miBooleanProperty;
    if (this.miColorProperty == 'blue') this.miColorProperty = 'orange'; else this.miColorProperty = 'blue';
    (this.miPropertyVariosStyles.fontStyle == 'italic') ? this.miPropertyVariosStyles.fontStyle = 'normal' : this.miPropertyVariosStyles.fontStyle = 'italic';
  }

  metodoA() {
    return "valor regresado x metodoA.";
  }
}
