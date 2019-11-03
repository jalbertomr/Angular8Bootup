import {Component, OnInit} from '@angular/core';

@Component({selector: '[app-mi-componente]',
  template: `
      <div><h1> Two Way Binding</h1><br>
          <textarea disabled><input  [(ngModel)]="miValorCapturado" type="text"></textarea><br>
          <input  [(ngModel)]="miValorCapturado" type="text"><br>
          <h2>property miValorCapturado = "{{miValorCapturado}}"</h2>
      </div>`,
  styles: []
})
export class MiComponenteComponent implements OnInit {
  public miValorCapturado = "";

  constructor() {
  }

  ngOnInit() {
  }

}
