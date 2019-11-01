import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-mi-componente]',
  template: `<div><h1>Con \`...\` permite varias lineas inline<br>
                inline template ...linea 1<br>
                inline template ...linea 2<br>
                inline template ...linea 3<br>
      styleUrls -> styles [\`div (se aplica css) \`]
            </h1></div>`,
  styles: [`
  div {
    color: orange;
    }
  `]
})
export class MiComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
