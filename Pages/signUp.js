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

export function FillForm(user) {
  //Popular forms
  cy.get('input[name="name"]').type(user["Nome completo"])
  cy.get('input[name="email"]').type(user["E-mail"])
  cy.get('input[name="password"]').type(user["Senha"])
  cy.get('input[name="confirmPassword"]').type(user["Confirmar senha"])

  //Verificar texto forms
  cy.get('input[name="name"]').should('have.value', user["Nome completo"])
  cy.get('input[name="email"]').should('have.value', user["E-mail"])
  cy.get('input[name="password"]').should('have.value', user["Senha"])
  cy.get('input[name="confirmPassword"]').should('have.value', user["Confirmar senha"])
}

//   export function ShowError(TextModal) {
//     //Localizar elemento com class de stilo somente
//     cy.get('input[name="email"]').should('have.text', TextModal)
// }

export function Submit() {
  //Clicar no botão
  cy.get('.btn__send button').click()
}
