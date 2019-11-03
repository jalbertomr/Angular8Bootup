import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> event Binding</h1><br>
          <h2>miPropertyNombre = {{miPropertyNombre}}  </h2>
          <h2>miPropertyTexto = {{miPropertyTexto}} </h2>
          <button (click)="onClick($event)"><h2>button (click)="onClick()"</h2></button>
          <button (click)="miPropertyTexto='asignado directo en template (vista).'"><h2>button (click)="miPropertyTexto='asignado directo en template (vista).'"</h2></button>
      </div>`,
  styles: []
})
export class MiComponenteComponent implements OnInit {
  public miPropertyNombre = "Beto";
  public miPropertyTexto = "";

  constructor() {
  }

  ngOnInit() {
  }

  onClick(event) {
    this.miPropertyTexto=event.type;
    console.log(event);
  }
}
