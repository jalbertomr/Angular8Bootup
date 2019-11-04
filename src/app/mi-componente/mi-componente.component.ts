import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> *ngIf Directive</h1><br>
          <h3>miPropertyDisplayText  = {{miPropertyDisplayText}}</h3>
          <textarea disabled><h2 *ngIf="miPropertyDisplayText; then thenBlock; else elseBlock">miPropertyDisplayText = "{{miPropertyDisplayText}}"</h2>
          <ng-template #thenBlock>
              <h2>ng-template #thenBlock</h2>
          </ng-template>
          <ng-template #elseBlock>
             <h2>ng-template #elseBlock</h2>
          </ng-template>
          </textarea><br>
          
          <h2 *ngIf="miPropertyDisplayText; then thenBlock; else elseBlock">miPropertyDisplayText = "{{miPropertyDisplayText}}"</h2>
          <ng-template #thenBlock>
              <h2>ng-template #thenBlock</h2>
          </ng-template>
          <ng-template #elseBlock>
             <h2>ng-template #elseBlock</h2>
          </ng-template>
          
          <button (click)="cambio()">Alternar</button>
      </div>`,
  styles: []
})

export class MiComponenteComponent implements OnInit {
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
