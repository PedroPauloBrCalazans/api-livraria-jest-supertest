import { describe, expect } from "@jest/globals";
import AuthService from "../../services/authService";

const authService = new AuthService();

describe("Testando a authService de cadastrar", () => {
  it("O usuário deve possuir um nome, email e senha", async () => {
    const userMock = {
      nome: "Pedro Paulo",
      email: "pedro@Mail.com.br",
    };

    const usuarioSalvo = authService.cadastrarUsuario(userMock);

    await expect(usuarioSalvo).rejects.toThrowError(
      "A senha de usuário é obrigatório!"
    );
  });
});

// rejects valida erros
