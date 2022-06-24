const site = 'https://qapp-web.vercel.app/'
const Text = 'Texto que vai usar'
const newClient = {
  "Nome completo": "Erica Cypress",
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

    //Verificar texto forms
    cy.get('input[name="name"]').should('have.value', newClient["Nome completo"])

    //Clicar no botão
    cy.get('.btn__send button').click()

    //Selecionar uma opção em uma lista
    cy.contains('.classeUl li', textoDentroLi).click()

  })
})