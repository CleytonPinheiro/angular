export class ReceitaItem {
  constructor(public id: number, public titulo: string, public qt: string) {}

  getLabel() {
    return this.qt + " de " + this.titulo;
  }
}
