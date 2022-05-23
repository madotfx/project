describe('My First Test Suite', function () {

    it('My firstTest case', function () {


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('.jumbotron > div > :nth-child(3)').click()
    })

})
