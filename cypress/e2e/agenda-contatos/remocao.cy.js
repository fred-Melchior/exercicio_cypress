/// <reference types="cypress" />

describe('Teste para a funcionalidade de remoção', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve deletar o contato corretamente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
    })
})