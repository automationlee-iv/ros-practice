describe('GET request', () => {
    it('GET All Products List', () => {
        cy.request({
            method: 'GET',
            url: 'https://automationexercise.com/api/productsList'
        }).then((response) => {
            expect(response.status).to.equal(200)
            cy.log('Products: '+JSON.stringify(response.body))
        })
    })

    it('GET Products Request properties', () => {
        cy.request('GET','https://automationexercise.com/api/productsList')
        .then((response) => {
            const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body
            const products = body.products

            if(!products){
                cy.log('Products array is undefined!')
                console.log('Response body: ', body)
                return
            }
            expect(response.status).to.equal(200)
            cy.log('Hi Response body: '+JSON.stringify(body))
            cy.log('First Product: '+JSON.stringify(products[0]))
            cy.log('First product category: '+products[0].category.category)
        })
    })

    it('GET Products Request type 2', () => {
        cy.request('GET','https://automationexercise.com/api/productsList')
        .its('status').should('not.equal', 404)
        .and('equal', 200)
    })

    it('GET Products comparing with expect', () => {
        cy.fixture('apiData/productList.json').then((data) => {
            cy.request({
                method: 'GET',
                url: 'https://automationexercise.com/api/productsList',
            }).then((response) => {
                expect(response.status).to.equal(200)
                const body = typeof response.body === 'string' ? JSON.parse(response.body) : response.body

                expect(body).to.deep.equal(data)
                expect(body.products[0].name).to.equal(data.products[0].name)
                expect(body.products[0].category.category).to.equal(data.products[0].category.category)
            })  
        })
    })

})
