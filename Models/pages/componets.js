const site = 'https://qapp-web.vercel.app/'
const Text = 'Texto que vai usar'
const TextLi = 'Texto que vai usar nas linhas'
const TextModal = 'Texto que vai usar no modal'


export function InicializeApp() {
  cy.viewport(1920,1080)
  cy.visit(site)
  //Clicar no botão
  cy.get('a[href="/auth/sign-up"]').click()

  //Check point está na pagina correta. 
  cy.get('.page-register--container__title h1').should('have.text', Text)
}

export function FillForm(newClient) {
  //Popular forms
  cy.get('input[name="name"]').type(newClient["Nome completo"])

  //Verificar texto forms
  cy.get('input[name="name"]').should('have.value', newClient["Nome completo"])

  //Selecionar uma opção em uma lista
  cy.contains('.classeUl li', TextLi).click()

  //upload de arquivo
  //Instalar biblioteca cypress-file-upload --save-dev
  //Na pasta supports --> Entra em e2e.js e incluir o comando import 'cypress-file-upload'
  //Pode escolher qual elemento prefere usar!!! 
  //^= localizadores só pelo valor inicail. (começa com) e $(termina com) e *(contém em qualquer posição)
  //Colocar concatenação caso o arquivo esteja em alguma subpasta. 
  cy.get('input[type="file"]' || 'input[accept^="image"]').attachFile('/nomePasta/' + newClient.anexo)
}

export function Submit() {
  //Botão Submit
  cy.get('.btn__send button').click()
}

export function ModalShouldBe(TextModal) {
  //Verificar um modal
  //Localizar elemento com class de stilo somente
  cy.get('div[class="nomeClass"]').should('have.text', TextModal)
}
