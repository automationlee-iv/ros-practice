import { burgerButton, logoutButton } from "../pages/logoutPage"

export const userLogout = () => {
    cy.get(burgerButton).click()
    cy.get(logoutButton).click()
}