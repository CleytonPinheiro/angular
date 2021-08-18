import { Component } from "@angular/core";
import { ReceitaItem } from "./components/receita-item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Olá, mundo";

  itens = [
    new ReceitaItem(1, "Leite", "1L"),
    new ReceitaItem(1, "Chocolate", "200g"),
    new ReceitaItem(1, "Ovo", "6"),
    new ReceitaItem(1, "Corante", "6ml"),
  ];
  mostrarIngredientes = false;

  exibir() {
    this.mostrarIngredientes = true;
  }
}
