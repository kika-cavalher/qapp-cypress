import { it } from 'faker/lib/locales'
import {InicializeApp, FillForm, Submit} from '../../Pages/signUp'
import createRandomUser from './factories/userFactory'





describe('Forms project page', () => {

  it('Criar um novo user', function () {
    var createUser = createRandomUser.user()

    InicializeApp()
    FillForm(createUser)
    Submit()
  })

  //TESTAR CAMPOS COM ERRO //

  // it('E-mail errado', function () {
  //   var createUser = signupFactory.delivery()
  //   createUser.email = 'ee'
  //   InicializeApp()
  //   FillForm(createUser)
  //   Submit()
  //   alertMessageShouldBe('O texto que aparece no erro')
  // })


  //TESTAR CAMPOS EM BRANCO //

    // context('required Fields', function(){
  //   const messages = [
  //     {field: 'fullName', output: 'Texto de erro nome'},
  //     {field: 'email', output: 'Texto de erro e-mail'},
  //   ]
  // })

  // before(function() {
  // //   InicializeApp()
  // //   Submit()
  // })

  // messages.forEach(function(msg) {
  //   it(`${msg.field} is required`, function() {
  //     alertMessageShouldBe(msg.output)
  //   })
  // })

    // it('campo em branco', function () {
  //   var createUser = signupFactory.delivery()


})