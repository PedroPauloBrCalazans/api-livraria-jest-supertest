import { describe, beforeEach, afterEach } from "@jest/globals";
import request from "supertest";
import app from "../../app.js";

let servidor;
beforeEach(() => {
  const porta = 3000;
  servidor = app.listen(porta);
}); // executa tudo antes dos testes

afterEach(() => {
  servidor.close();
}); // fechar o servidor após os testes

describe("Testando a rota de login (POST)", () => {
  it("O login deve possuir um email e senha para se autenticar", async () => {
    const loginMock = {
      email: "pedro@teste.com.br",
    };

    await request(servidor)
      .post("/login")
      .send(loginMock)
      .expect(500)
      .expect('"A senha de usuario é obrigatório."');
  });
});

// supertest para testar os endpoints
// integração / teste de caixa preta / é um teste que não temos acesso direto ao nosso codigo
