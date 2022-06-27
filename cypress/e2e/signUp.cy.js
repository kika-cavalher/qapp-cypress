import {InicializeApp, FillForm, Submit} from '../../Pages/signUp'
import createRandomUser from './factories/userFactory'


describe('Forms project page', () => {

  it('Criar um novo user', function () {
    var createUser = createRandomUser.user()

    InicializeApp()
    FillForm(createUser)
    Submit()
  })

  // it('E-mail errado', function () {

  //   var createUser = signupFactory.delivery()
  //   createUser.email = 'ee'

  //   InicializeApp()
  //   FillForm(createUser)
  //   Submit()
  //   // ShowError('O texto que aparece no erro')
  // })

})