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


  // TESTAR CAMPOS COM ERRO //

  it('E-mail errado', function () {
    var createUser = signupFactory.delivery()
    createUser.email = 'ee'
    InicializeApp()
    FillForm(createUser)
    Submit()
    alertMessageShouldBe('O texto que aparece no erro')
  })


  // TESTAR CAMPOS EM BRANCO //

    context('required Fields', function(){
    const messages = [
      {field: 'fullName', output: 'Texto de erro nome'},
      {field: 'email', output: 'Texto de erro e-mail'},
    ]
  })

  before(function() {
  //   InicializeApp()
  //   Submit()
  })

  messages.forEach(function(msg) {
    it(`${msg.field} is required`, function() {
      alertMessageShouldBe(msg.output)
    })
  })


  //   export function alertMessageShouldBe(expectedMessage) {
//     cy.contains('.alert-error', expectedMessage).should('be.visible')
// }

