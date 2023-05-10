/// <reference types="cypress" />

describe('Teste para funcionalidade de inclusão de contato', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Preencher os campos e enviar corretamente', () => {
        cy.get('[type="text"]').type('Fulano de Tal')
        cy.get('[type="email"]').type('fulano@email.com')
        cy.get('[type="tel"]').type('11 1111-1111')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > :nth-child(5)')
    })
})