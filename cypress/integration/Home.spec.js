import * as home from '../pages/Home.page'
import * as creditCards from '../pages/CreditCards.page'
import * as fixerSavers from '../pages/FixedSavers.page'
import * as footer from '../pages/Footer.page'

describe('== HOME PAGE ==', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    describe('Given THE TANDEM CREDIT CARDS section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkCreditCardsSectionHeader()
            home.checkCreditCardsSectionParagraph()
        })

        describe('When I click on Find Out More & Apply', () => {
            beforeEach(() => {
                home.clickOnFindOutMoreAndApplyForCreditCard()
            })

            it('Then I should go to Credit Cards page', () => {
                creditCards.checkImAtCreditCardsPage()
            })
        })
    })

    describe('Given THE FIXED SAVER ACCOUNT section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkFixedSaverAccountSectionHeader()
            home.checkFixedSaverAccountSectionParagraph()
        })

        describe('When I click on Find Out More & Apply', () => {
            beforeEach(() => {
                home.clickOnFindOutMoreAndApplyForFixedSaver()
            })

            it('Then I should go to Fixed Saver page', () => {
                fixerSavers.checkImAtFixedSaversPage()
            })
        })
    })

    describe('Given the page footer', () => {
        it('Then I should see the phone number', () => {
            footer.checkPhoneNumber()
        })

        it('Then I should see the contact hours', () => {
            footer.checkContactHoursMessage()
        })

        it('Then I should see the stolen cards contact hours', () => {
            footer.checkStolenMessage()
        })
    })
})
