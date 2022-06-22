const site = 'https://qapp-web.vercel.app/'
const TextLoginHome = 'Faça o seu login.'

describe('Home page', () => {
  it('App must be online', () => {
    cy.viewport(1920,1080)
    cy.visit(site)
    cy.get('#page-login h1').should('have.text', TextLoginHome)
  })
})