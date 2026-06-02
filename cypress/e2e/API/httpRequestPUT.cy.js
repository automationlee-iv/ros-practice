describe('HTTP Reqeust PUT',() => {
    it('PUT Request Update user account', () => {
        cy.request({
            method:'PUT',
            url: 'https://automationexercise.com/api/updateAccount',
            form: true,
            body: {  
                name: 'test',
                email: 'testtraining@yopmail.com',
                password: 'testtraining',
                title: 'Mr',
                birth_date: '30',
                birth_month: 'May',
                birth_year: '1990',
                firstname: 'test',
                lastname: 'test',
                company: 'test',
                address1: 'test',
                address2: 'test',
                country: 'test',
                zipcode: '12345',
                state: 'test',
                city: 'test',
                mobile_number: '1234567890'
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            cy.log('Response code: '+response.status)
            cy.log('Response body: '+JSON.stringify(body))
            cy.log('Response message: '+body.message)
            expect(body.message).to.eq('User updated!')
        })
    })
})