describe('teste e2e - Tela de login', () => {
  it('Preencher com dados validos', () => {
    cy.visit('http://localhost:3000/')
    
    //preeencher campo de email com dados validos
    cy.get('#email').click().type('user@example.com')
    //preeencher campo de senha com dados validos
    cy.get('#password').click().type('password123')
    //preeencher campo de senha com dados validos
    cy.get('#entrar').click()
  })
  
})