import { continueButton, firstName, lastName, zipCode } from "../pages/checkoutInfoPage"
import { checkoutButton, itemName, itemPrice } from "../pages/checkoutProductPage"

export const verifyProduct = (productName, productPrice) => {
    cy.get(itemName).should('contain', productName)
    cy.get(itemPrice).should('contain', productPrice)
    cy.get(checkoutButton).click()
}
export const fillCheckoutForm = (clientInfo) => {
    cy.get(firstName).type(clientInfo.firstName)
    cy.get(lastName).type(clientInfo.lastName)
    cy.get(zipCode).type(clientInfo.zipCode)
    cy.get(continueButton).click()
}