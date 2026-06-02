import { clientData } from "../../fixtures/clientData"
import { productItemData } from "../../fixtures/productsList"
import { userData } from "../../fixtures/userData"
import { fillCheckoutForm, verifyProduct } from "../../support/actions/checkoutProductActions"
import { addItemToCart } from "../../support/actions/itemListActions"
import { userLogin } from "../../support/actions/loginActions"
import { userLogout } from "../../support/actions/logoutActions"


describe('Saucedemo test', {testIsolation: false},() => {
  before(() => {
    cy.visit('https://www.saucedemo.com/')
  })

  it('Verify user can login', () => {
    userLogin(userData.userName, userData.userPassword)
  })

  it('Verify user can add an Item to cart', () => {
    addItemToCart();
    verifyProduct(productItemData[0].name, productItemData[0].price);
    fillCheckoutForm(clientData)
  })

  // after("User can logout", () => {
  //   userLogout();
  // })
})
