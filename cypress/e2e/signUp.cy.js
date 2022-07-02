import {InicializeApp, FillForm, Submit} from '../../Pages/signUp'
import createRandomUser from './factories/userFactory'



describe('Forms project page', () => {
  it('Criar um novo user', () => {
    const createUser = createRandomUser.user()
    
    InicializeApp()
    FillForm(createUser)
    Submit()
  })
})




