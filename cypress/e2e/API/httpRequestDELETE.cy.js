describe.skip('HTTP Request DELETE',() => {
    it('Delete User Account Request', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://automationexercise.com/api/deleteAccount',
            form: true,
            body: {
                email: 'sarahtest10@yopmail.com',
                password: 'Password1'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            cy.log('Response code: '+response.status)
            cy.log('Response body: '+JSON.stringify(body))
            cy.log('Response message: '+body.message)
            expect(body.message).to.equal('Account deleted!')
        })
    })
})