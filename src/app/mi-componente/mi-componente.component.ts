import { Component, OnInit } from '@angular/core';


@Component({
  selector: '[app-mi-componente]',
  template: `<div><h1> Interpolation<br>
             - Valor tomado de atributo de clase = {{miValor}}<br>
             - {{12.23 + 34}}<br>
             - {{"Concatenando strings " + miValor}}<br>
             - longitud de miValor: {{miValor.length}}<br>
            - "miValor a UpperCase:  + {{miValor.toLocaleUpperCase()}}<br>
            - llamando metodoA: {{metodoA()}}<br>
            - Asignacion no es permitida: a = 2 + 2 <br>
            - global js variables no son observadas: window.location.href: <br>
            - pero si por variable de clase: {{siteUrl}}<br>
            - ejemplo: public siteUrl = window.location.href;
            </h1></div>`,
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
