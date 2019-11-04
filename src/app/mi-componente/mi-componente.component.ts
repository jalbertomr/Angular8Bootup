import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> *ngIf Directive</h1><br>
          <textarea disabled><h2 *ngIf="miPropertyDisplayText">miPropertyDisplayText = "{{miPropertyDisplayText}}"</h2></textarea><br>
          
          <h2 *ngIf="miPropertyDisplayText">miPropertyDisplayText = "{{miPropertyDisplayText}}"</h2>
          <button (click)="cambio()">Alternar</button>

      </div>`,
  styles: []
})

export class MiComponenteComponent implements OnInit {
  public miPropertyValue = "algo";
  public miPropertyDisplayText = true;

  constructor() {
  }

  cambio() {
    console.log("IN cambio()");
    this.miPropertyDisplayText == true ? this.miPropertyDisplayText = false : this.miPropertyDisplayText = true;
    console.log("this.miPropertyDisplayText: " + this.miPropertyDisplayText);
  }

  ngOnInit() {
  }

}
