import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> *ngFor Directive</h1><br>
          <textarea disabled><div *ngFor="let color of arrColors;odd as i">
             <h2>{{color}}{{soloParaMostrar}}</h2>
          </div>
          </textarea><br>
          <div *ngFor="let color of arrColors; odd as i">
             <h2>{{i}}: {{color}}</h2>
          </div>
      </div>`,
  styles: []
})

export class MiComponenteComponent implements OnInit {
  public arrColors = ['rojo','azul','verde','amarillo','blanco'];
  public soloParaMostrar = "{{i}}: {{color}}";

  constructor() {
  }

  ngOnInit() {
  }

}
