import { loginButton, userName, userPassword } from "../pages/loginPage"

export const userLogin = (name, password) => {
    cy.get(userName, { timeout: 10000 }).should('be.visible')
    cy.get(userName, { timeout: 10000 }).type(name)
    cy.get(userPassword).type(password)
    cy.get(loginButton).click()
    cy.get('.inventory_item').should('be.visible')
}