
/// <reference types="cypress" />

import { naBuscaCorreios } from "../support/PageObjects"

describe('Automatização via cypress site dos Correios', {retries:2}, () => {
    beforeEach('Abrir o Site', () => {
      cy.abrirSite()
    })

    it('Busca por CEP 69082-640', () => {

      naBuscaCorreios.entraComValor('69082-640')
      cy.wait(1000)
      cy.get('tbody tr').first().find('td').then ( tableColumns => {
        cy.wrap(tableColumns).eq(0).should('contain', 'Rua Doutor Elviro Dantas')
        cy.wrap(tableColumns).eq(1).should('contain', 'Coroado')
        cy.wrap(tableColumns).eq(2).should('contain', 'Manaus/AM')
        cy.wrap(tableColumns).eq(3).should('contain', '69082-640')
      })
 
    })

    it('Busca por nome Instituto Creathus', {retries:2}, () => {

      naBuscaCorreios.entraComValor('Instituto Creathus')
      cy.wait(1000)
      cy.get('#mensagem-resultado-alerta').invoke('text').then ( text =>{
        expect(text).to.equal('Dados não encontrado')
      })

    })

    it.only('Busca ppor Cep e nome', {retries:2}, () => {


      naBuscaCorreios.entraComValor('69082-640')
      cy.wait(1000)
      cy.get('tbody tr').first().find('td').then ( tableColumns => {
        cy.wrap(tableColumns).eq(0).should('contain', 'Rua Doutor Elviro Dantas')
        cy.wrap(tableColumns).eq(1).should('contain', 'Coroado')
        cy.wrap(tableColumns).eq(2).should('contain', 'Manaus/AM')
        cy.wrap(tableColumns).eq(3).should('contain', '69082-640')
      })

      cy.get('#btn_nbusca').click()

      naBuscaCorreios.entraComValor('Instituto Creathus')
      cy.wait(1000)
      cy.get('#mensagem-resultado-alerta').invoke('text').then ( text =>{
        expect(text).to.equal('Dados não encontrado')
      })

    })
    
  })
  