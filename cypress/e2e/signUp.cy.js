import {InicializeApp, FillForm, Submit} from '../../Pages/signUp'


describe('Forms project page', () => {

  before(function(){
    cy.fixture('user').then(function(db){
       this.userDb = db
    })
  })

  it('Criar um novo user', function () {
    InicializeApp()
    FillForm(this.userDb.user)
    Submit()
  })
})