import { describe, expect } from "@jest/globals";
import db from "../../db/dbconfig.js";

describe("Testando configDB", () => {
  it("Teste de conexão com BD", async () => {
    const autorMock = {
      nome: " Pedro Paulo",
      nacionalidade: "Brasileiro",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    const autoSalvo = await db("autores")
      .insert(autorMock)
      .then((retorno) => db("autores").where("id", retorno[0]))
      .then((autorSelecionado) => autorSelecionado[0]);

    expect(autoSalvo.nome).toBe(autorMock.nome);
  });
});
