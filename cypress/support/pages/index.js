/// <reference types="cypress" />

import { Home } from "./HomePageElements";

class telaHome {
    fecharModal(){
        cy.get(Home.modal).click()
    }

    acessarTelaLogin(){
        cy.get(Home.botaoPaginaLogin).click()
    }
}

export default new telaHome();