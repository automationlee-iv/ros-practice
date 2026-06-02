import { cartBadge, cartIcon, itemButton } from "../pages/itemListPage"

export const addItemToCart = () => {
    cy.get(itemButton).click()
    cy.get(cartBadge).should('exist')
    cy.get(cartIcon).click()
}