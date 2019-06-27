import * as contactUs from '../pages/ContactUs.page'

describe('== Contact Us ==', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl + 'contact-us')
    })

    describe('Given I am on the contact us page', () => {
        it('Then I should see the appropriate heading', () => {
            contactUs.checkImAtContactUsPage()
        })

        it('Then I should see the phone number', () => {
            contactUs.checkPhoneNumber()
        })

        it('Then I should see the contact hours', () => {
            contactUs.checkContactHoursMessage()
        })
    })
})
