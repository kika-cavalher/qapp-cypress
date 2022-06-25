import {InicializeApp, FillForm, Submit, ModalShouldBe} from './pages/componets'


//Colocar todas as etapas do teste novamente e tirar confirmação de sucesso, pois dará erro. 
//Componentizar function para não repetir código

describe('Forms project page', () => {

  BeforeEach(() => {
    cy.fixture('user').then((db) => {
      user = db
    })
  });

  
  it('Abrir o modal e criar um novo projeto', () => {
    InicializeApp()
    FillForm(user.newUserError)
    Submit()
    ModalShouldBe(user.textMessageErorr)
  })
})