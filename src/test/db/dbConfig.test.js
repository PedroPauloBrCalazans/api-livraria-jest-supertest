import { describe, expect } from "@jest/globals";
import db from "../../db/dbconfig.js";

describe("Testando configDB", () => {
  it("Teste de conexão com BD", async () => {
    const autorMock = {
      nome: " Pedro Martins",
      nacionalidade: "Brasileiro",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const autoSalvo = await db("autores")
      .insert(autorMock)
      .then((retorno) => db("autores").where("id", retorno[0]))
      .then((autorSelecionado) => autorSelecionado[0]);

    expect(autoSalvo.nome).toBe(autorMock.nome);

    await db("autores").where({ id: autoSalvo.id }).del();
  });
});

//Teste acima e conhecido como E2E.
// Valida o BD a Service e a camada de retorno de dados.
// integração, unitários e BD.
