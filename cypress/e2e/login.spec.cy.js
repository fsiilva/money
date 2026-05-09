describe("fluxo e2e - login e cadastro de transacao", () => {
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/logins", {
      statusCode: 200,
      body: [
        {
          id: 1,
          email: "user@example.com",
          password: "password123",
        },
      ],
    }).as("buscarUsuarios");

    cy.intercept("GET", "http://localhost:3001/transactions", {
      statusCode: 200,
      body: [
        {
          id: "transaction-1",
          title: "Salario",
          value: "229000",
          category: "Financa",
          type: "entry",
          date: "10/04/2026",
        },
      ],
    }).as("buscarTransacoes");

    cy.intercept("POST", "http://localhost:3001/transactions", {
      statusCode: 201,
      body: {
        id: "transaction-2",
        title: "Freelance",
        value: "1500",
        category: "Trabalho",
        type: "entry",
        date: "10/04/2026",
      },
    }).as("cadastrarTransacao");
  });

  it("faz login e cadastra uma nova transacao", () => {
    cy.visit("/");

    cy.contains("h1", "Acesse sua conta").should("be.visible");
    cy.get("#email").type("user@example.com");
    cy.get("#password").type("password123");
    cy.get("#entrar").click();

    cy.wait("@buscarUsuarios");
    cy.location("pathname").should("eq", "/dashboard");
    cy.wait("@buscarTransacoes");

    cy.contains("button", "Nova transação").click();
    cy.contains("h2", "Cadastrar transação").should("be.visible");

    cy.get('input[placeholder="Titulo"]').type("Freelance");
    cy.get('input[placeholder="Valor"]').type("1500");
    cy.get('input[placeholder="Categoria"]').type("Trabalho");
    cy.contains("button", "Cadastrar").click();

    cy.wait("@cadastrarTransacao")
      .its("request.body")
      .should("deep.include", {
        title: "Freelance",
        value: "1500",
        category: "Trabalho",
        type: "entry",
      });

    cy.contains("td", "Freelance").should("be.visible");
    cy.contains("td", "1500").should("be.visible");
    cy.contains("td", "Trabalho").should("be.visible");
  });
});
