const site = 'https://qapp-web.vercel.app/'
const TextSignUp = 'Faça o seu cadastro.'
const newClient = {
  "Nome completo": "Erica Cypress",
  "E-mail": "erica.cavalher+01@gmail.com",
  "Senha": "Kika1234",
  "Confirmar senha": "Kika1234"
}

describe('Forms project page', () => {
  it('Abrir o modal e criar um novo projeto', () => {
    cy.viewport(1920,1080)
    cy.visit(site)
    //Clicar no botão
    cy.get('a[href="/auth/sign-up"]').click()

    //Check point está na pagina correta. 
    cy.get('.page-register--container__title h1').should('have.text', TextSignUp)

    //Popular forms
    cy.get('input[name="name"]').type(newClient["Nome completo"])
    cy.get('input[name="email"]').type(newClient["E-mail"])
    cy.get('input[name="password"]').type(newClient["Senha"])
    cy.get('input[name="confirmPassword"]').type(newClient["Confirmar senha"])

    //Verificar texto forms
    cy.get('input[name="name"]').should('have.value', newClient["Nome completo"])
    cy.get('input[name="email"]').should('have.value', newClient["E-mail"])
    cy.get('input[name="password"]').should('have.value', newClient["Senha"])
    cy.get('input[name="confirmPassword"]').should('have.value', newClient["Confirmar senha"])

    //Clicar no botão
    cy.get('.btn__send button').click()

  })
})