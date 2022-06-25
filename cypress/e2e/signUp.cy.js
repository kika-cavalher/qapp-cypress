import {InicializeApp, FillForm, Submit} from '../../Pages/signUp'
import {newClient} from '../../massaTeste/User'


describe('Forms project page', () => {
  it('Se inscrever no projeto', () => {
    InicializeApp()
    FillForm(newClient)
    Submit()
  })
})