import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-mi-componente]',
  template: '<div><h1>inline template</h1></div>',
  styleUrls: ['./mi-componente.component.css']
})
export class MiComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
