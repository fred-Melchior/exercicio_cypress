/// <reference types="cypress" />

describe('Teste para a funcionalidade de alteração', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    it('Deve editar os campos e enviar corretamente', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('{selectAll}{backspace}teste')
        cy.get('[type="email"]').type('{selectAll}{backspace}email.teste@email.com')
        cy.get('[type="tel"]').type('{selectAll}{backspace}12 3456-7890')
        cy.get('.alterar').click()
    })
    it('Deve cancelar a edição corretamente', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('{selectAll}{backspace}teste')
        cy.get('[type="email"]').type('{selectAll}{backspace}email.teste@email.com')
        cy.get('[type="tel"]').type('{selectAll}{backspace}12 3456-7890')
        cy.get('.cancelar').click()
    })
})