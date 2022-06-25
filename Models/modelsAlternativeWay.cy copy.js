import {InicializeApp, FillForm, Submit, ModalShouldBe} from './pages/componets'
import {newClientError, textMessageErorr} from './db/modelDb'

//Colocar todas as etapas do teste novamente e tirar confirmação de sucesso, pois dará erro. 
//Componentizar function para não repetir código

describe('Forms project page', () => {
  it('Abrir o modal e criar um novo projeto', () => {
    InicializeApp()
    FillForm(newClientError)
    Submit()
    ModalShouldBe(textMessageErorr)
  })
})