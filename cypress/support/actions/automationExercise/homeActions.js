import { singUploginButton } from "../../pages/automationExerciseP/homePage"

export const singUp = (userData) => {
    cy.get(singUploginButton).click()
    cy.get('#user-name').type(userData.userName)
    cy.get('#password').type(userData.userPassword)
    cy.get('#login-button').click()
}