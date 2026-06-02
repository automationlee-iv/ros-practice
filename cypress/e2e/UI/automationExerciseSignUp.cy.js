import { userData } from "../../fixtures/aExerciseUserData"
import { singUp } from "../../support/actions/automationExercise/homeActions"

describe('Automation Exercise test', {testIsolation: false},() => {
    before(() => {
        cy.visit('https://automationexercise.com/')
    })

    it('Verify user can create an account', () => {
        singUp(userData)
    })
})