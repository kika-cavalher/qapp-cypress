const ProjectPage = 'https://qapp-web.vercel.app/projects'
const TextTitle = 'Projetos'
const TextButton = 'Novo projeto'

describe('Forms project page', () => {
  it('Abrir o modal e criar um novo projeto', () => {
    cy.viewport(1920,1080)
    cy.visit(ProjectPage)
    cy.get('#page-project .page-title h1').should('have.text', TextTitle)
    // cy.get('.btn-open-modal button').should('have.text', TextButton)
  })
})