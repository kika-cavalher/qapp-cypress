const site = 'https://qapp-web.vercel.app/'
const TextSignUp = 'Faça o seu cadastro.'

export function InicializeApp() {
  cy.viewport(1920,1080)
  cy.visit(site)
  //Clicar no botão
  cy.get('a[href="/auth/sign-up"]').click()
  
  //Check point está na pagina correta. 
  cy.get('.page-register--container__title h1').should('have.text', TextSignUp)
}

export function FillForm(newClient) {
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
}

export function Submit() {
  //Clicar no botão
  cy.get('.btn__send button').click()
}
