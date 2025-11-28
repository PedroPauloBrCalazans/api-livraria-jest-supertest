import { describe, expect } from "@jest/globals";
import AuthService from "../../services/authService";

const authService = new AuthService();

describe("Testando a authService de cadastrar", () => {
  it("O usuário deve possuir um nome, email e senha", async () => {
    //arrange = quais informações queremos validar
    const userMock = {
      nome: "Pedro Paulo",
      email: "pedro@Mail.com.br",
    };

    //act = vamos buscar as informações na função, service
    const usuarioSalvo = authService.cadastrarUsuario(userMock);

    //assert = vamos comparar o arrange com nosso assert
    await expect(usuarioSalvo).rejects.toThrowError(
      "A senha de usuário é obrigatório!"
    );
  });
});

// rejects valida erros ***** teste acima e conhecido como PADRÃO TRIPLE A
// Classificação de teste unitário..
// O teste sendo validado no proprio codigo e tivemos uma melhoria, Teste de caixa branca = acesso ao codigo...
