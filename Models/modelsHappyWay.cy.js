import {InicializeApp, FillForm, Submit} from './pages/componets'
import {newClient} from './db/modelDb'

//pasta fixture = massa de teste estático. 
// 1 colocar arquivo na pasta fixtures

describe('Forms project page', () => {
  it('Abrir o modal e criar um novo projeto', () => {
    InicializeApp()
    FillForm(newClient)
    Submit()
  })
})