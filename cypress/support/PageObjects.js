
export class BuscaCorreios{

    entraComValor(valor){

        cy.get('#inicioConteudo').find('[type="text"]').type(valor)
        cy.wait(2000)
        cy.get('#btn_pesquisar').click()
    }

}

export const naBuscaCorreios = new BuscaCorreios()