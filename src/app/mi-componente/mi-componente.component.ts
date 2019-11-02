import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-mi-componente]',
  template: `<div><h1> Property binding</h1><br>
      <table><tr><th>Attribute</th><th>Property</th></tr>
          <tr><td>HTML.</td><td>DOM (Document Object Model).</td></tr>
          <tr><td>Initialized.</td><td>Initialized by Attribute.</td></tr>
          <tr><td>Not Change.</td><td>Can Change.</td></tr>
      </table>
             <input type="text" value="Bext">
            </div>`,
  styles: []
})
export class MiComponenteComponent implements OnInit {

  public miValor = "valorXX";
  public siteUrl = window.location.href;

  constructor() { }

  ngOnInit() {
  }

  metodoA() {
    return "valor regresado x metodoA.";
  }
}
