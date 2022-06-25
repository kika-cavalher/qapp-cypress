import {InicializeApp, FillForm, Submit} from './pages/componets'


//pasta fixture = massa de teste estático. 
// 1 colocar arquivo na pasta fixtures

describe('Forms project page', () => {

  Before(() => {
    cy.log('Mensagem para aparcer no log 1x. Antes de executar tudo ')
  });

  BeforeEach(() => {
    cy.fixture('user').then((db) => {
      user = db
    })
  });

  After(() => {
    cy.log('Mensagem para aparcer no log 1x. Depois de executar tudo')
  });

  afterEach(() => {
    cy.log('Mensagem para aparcer no log TODA vez. Depois de executar cada caso de teste ')
  });

  it('Abrir o modal e criar um novo projeto', () => {
    InicializeApp()
    FillForm(user.newUser)
    Submit()
  })
})