import { User, Usuario } from "./Usuario";

export class Aluno extends Usuario {
  notas: number[];

  constructor(dados: User) {
    super(dados);
    this.notas = [];
  }

  obterMedia(): number {
    let somarNotas: number = 0;

    for (const nota of this.notas) {
      somarNotas += nota;
    }

    return somarNotas / this.notas.length;
  }
}
