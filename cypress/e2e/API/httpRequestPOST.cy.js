describe('HTTP Reqeust POST',() => {
    it('POST Request 01', () => {
       cy.request({
           url: 'https://automationexercise.com/api/searchProduct',
           method: 'POST',
           form: true,
           body: {
               "search_product": "dress"
           }
       }).then((response) => {
           expect(response.status).to.equal(200)
           const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
           cy.log('Response code: '+response.status)
           cy.log('Response body: '+JSON.stringify(body))
       })
    })

    it('Login POST Request', () =>{
        cy.request({
            method: 'POST',
            url: 'https://automationexercise.com/api/verifyLogin',
            form: true,
            body: {
                email: 'testtraining@yopmail.com',
                password: 'testtraining'
            }  
        }).then((response) => {
            expect(response.status).to.equal(200)

            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

            cy.log('Response message: '+body.message)
            cy.log('Response body: '+JSON.stringify(body))
            expect(body.message).to.eq('User exists!')
        })
    })

    it('Login POST Request - fixture', () => {
        cy.fixture('apiData/loginBody.json').then((data) => {
            cy.request({
                method: 'POST',
                url: 'https://automationexercise.com/api/verifyLogin',
                form: true,
                body: data
            }).then((response) => {
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
                expect(response.status).to.equal(200)
                expect(body.message).to.eq('User exists!')
                cy.log('Response body: '+JSON.stringify(body))
                cy.log('Response message: '+body.message)
            })
        })
    })

    it('POST search product', () => {

    })
})