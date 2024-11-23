import telaHome from "../support/pages/index"
import loginform from "../support/pages/LoginPage"
describe("Realizar o fluxo de criação Login por completo", () => {
    before("Acessar a tela do Auth0", () => {
        cy.visit("/")
    })

    it('Acessar a tela de Home page e direcionar para a tela de login', () => {
        telaHome.fecharModal()
        telaHome.acessarTelaLogin()
        loginform.LoginForm()

    });

 
})