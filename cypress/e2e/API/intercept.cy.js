describe('Intercept examples',() => {
    it('Intercept request example I', () => {
        cy.intercept('GET','https://automationexercise.com/products').as('products')
        cy.visit('https://automationexercise.com/')
        cy.get('[href="/products"]').click()
        cy.wait('@products').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)
        })
    })

    it('Intercept products api interaction', () => {
        cy.intercept('GET', 'https://automationexercise.com/api/productsList').as('allProducts')
        cy.visit('https://automationexercise.com/api_list')
        cy.get('[href="/api_list"]').click()
        cy.get('[data-toggle="collapse"]').first().click()
        cy.get('[href*="/productsList"]').first().invoke('removeAttr', 'target').click();
        cy.wait('@allProducts').then((interception) => {
            expect(interception.response.statusCode).to.eq(200)

            const body = typeof interception.response.body === 'string' ? JSON.parse(interception.response.body) : interception.response.body
            const products = body.products

            if(!products){
                cy.log('Products array is undefined!')
                console.log('Response body: ', body)
                return
            }
            expect(products.length).to.equal(34)
            expect(products[0].name).to.equal('Blue Top')
        })
    })

    it('Intercept example - mock data', () => {
        cy.intercept('GET', 'https://automationexercise.com/api/productsList', 
            {
                fixture: 'apiData/interceptData.json'
            }
        ).as('allProducts')
        cy.visit('https://automationexercise.com/api_list')
        cy.get('[href="/api_list"]').click()
        cy.get('[data-toggle="collapse"]').first().click()
        cy.get('[href*="/productsList"]').first().invoke('removeAttr', 'target').click();
        cy.wait('@allProducts').then((interception) => {
            expect(interception.response.statusCode).to.eq(200) 

            const body = typeof interception.response.body === 'string' ? JSON.parse(interception.response.body) : interception.response.body
            const products = body.products

            if(!products){
                cy.log('Products array is undefined!')
                console.log('Response body: ', body)
                return
            }
            expect(products.length).to.equal(5)
            expect(products[0].name).to.equal('Rosario Top')
        })
    })

    it('Intercept with expected Data', () => {
        cy.fixture('apiData/expectedMockData.json').then((expected) => {
            cy.intercept('GET', 'https://automationexercise.com/api/productsList', 
            {
                fixture: 'apiData/interceptData.json'
            }
        ).as('allProducts')
        cy.visit('https://automationexercise.com/api_list')
        cy.get('[href="/api_list"]').click()
        cy.get('[data-toggle="collapse"]').first().click()
        cy.get('[href*="/productsList"]').first().invoke('removeAttr', 'target').click();
        cy.wait('@allProducts').then((interception) => {
            expect(interception.response.statusCode).to.eq(200) 

            const body = typeof interception.response.body === 'string' ? JSON.parse(interception.response.body) : interception.response.body
            const products = body.products

            if(!products){
                cy.log('Products array is undefined!')
                console.log('Response body: ', body)
                return
            }
            expect(products[4].name).to.equal(expected.products[0].name)
        })
        })
    })
})