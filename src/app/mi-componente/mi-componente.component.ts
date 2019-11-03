import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> Template Reference Variable</h1><br>
          <textarea disabled><input #miInput type="text"></textarea><br>
          <input #miInput type="text"><br>
          <button (click)="logMessage(miInput)"><h3>button (click)="logMessage(miInput)"</h3></button>
          <h2>Valor Capturado = "{{miValorCapturado}}"</h2>
      </div>`,
  styles: []
})
export class MiComponenteComponent implements OnInit {
  public miValorCapturado = "";

  constructor() {
  }

  ngOnInit() {
  }

  logMessage(miInput: HTMLInputElement) {
    console.log(miInput);
    this.miValorCapturado = miInput.value;
  }
}
