/// <reference types="cypress" />

import { LoginPage } from "./LoginPageElements";

class telaLogin {
    LoginForm(){
        cy.get(LoginPage.inputEmail).type("johnny.kalfeltz@icloud.com")
        cy.get(LoginPage.continueButton).click()
        cy.get(LoginPage.passwordInput).type("&XXvxG2#RWSPr!_")
        cy.get(LoginPage.continueButton2Step).click()

    }

}

export default new telaLogin();