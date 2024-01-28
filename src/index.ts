import { Aluno } from "./Aluno";
import { Professor } from "./Professor";

const carlos = {
  nome: "Carlos",
  email: "carlos@email.com",
  senha: "12345",
};

const joelma = {
  nome: "Joelma",
  email: "joelma@email.com",
  senha: "12345",
};

const amanda = {
  nome: "Amanda",
  email: "amanda@email.com",
  senha: "12345",
};

const professorAmanda = new Professor(amanda, "Ciencias");
const alunaJoelma = new Aluno(joelma);
const alunoCarlos = new Aluno(carlos);

professorAmanda.login("12345");
professorAmanda.lancarNotas(alunaJoelma, 10);
professorAmanda.lancarNotas(alunaJoelma, 5);
console.log(alunaJoelma.notas);
console.log(alunaJoelma.obterMedia());
