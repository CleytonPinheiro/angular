import { Component } from "@angular/core";

import { ReceitaItem } from "../components/receita-item";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  titulo;
  subtitulo;
  menu;

  constructor() {
    this.titulo = "Teste título";
    this.subtitulo = "Meu primeiro component";
    this.menu = [
      {
        texto: "Home",
        url: "/",
      },
      { texto: "Sobre", url: "/sobre" },
      { texto: "Contato", url: "/contato" },
    ];
  }
}
