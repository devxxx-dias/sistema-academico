import { Aluno } from "./Aluno";
import { User, Usuario } from "./Usuario";

interface IProfessor {
  lancarNotas(aluno: Aluno, nota: number): void;
}
export class Professor extends Usuario implements IProfessor {
  disciplina: string;

  constructor(dados: User, disciplina: string) {
    super(dados);
    this.disciplina = disciplina;
  }
  lancarNotas(aluno: Aluno, nota: number): void {
    this.verificarLogin();
    aluno.notas.push(nota);
  }

  private verificarLogin(): void {
    if (!this.logado) {
      throw new Error("Professor nao autenticado.");
    }
  }
}
