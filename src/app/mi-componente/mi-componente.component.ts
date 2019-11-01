import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-mi-componente]',
  template: `<div><h1>Con \`...\` permite varias lineas inline<br>
                inline template ...linea 1<br>
                inline template ...linea 2<br>
                inline template ...linea 3<br>
            </h1></div>`,
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
