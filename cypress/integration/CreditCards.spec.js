import * as creditCards from '../pages/CreditCards.page'
import * as cashbackCard from '../pages/CashbackCard.page'
import * as journeyCard from '../pages/JourneyCard.page'

describe('== Credit Cards ==', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl + 'credit-cards')
    })

    describe('Given I am on the credit cards page', () => {
        it('Then I should see the appropriate header and info', () => {
            creditCards.checkImAtCreditCardsPage()
        })

        describe('When I click on the find out more link for cashback card', () => {
            beforeEach(() => {
                creditCards.clickCashbackChoice()
            })
            it('Then I should land on cashback card page', () => {
                cashbackCard.checkImAtCashbackCardPage()
            })
        })

        describe('When I click on the find out more link for journey card', () => {
            beforeEach(() => {
                creditCards.clickJourneyChoice()
            })
            it('Then I should land on journey card page', () => {
                journeyCard.checkImAtJourneyCardPage()
            })
        })
    })
})
