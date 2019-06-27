import * as navbar from '../pages/NavBar.page'
import * as home from '../pages/Home.page'
import * as getAppModal from '../pages/GetAppModal.page'
import * as theApp from '../pages/TheApp.page'
import * as creditCards from '../pages/CreditCards.page'
import * as fixerSavers from '../pages/FixedSavers.page'
import * as blog from '../pages/Blog.page'

describe('== NAVBAR ==', () => {
    describe('Given I am on the Tandem Website', () => {
        before(() => {
            cy.visit(Cypress.config().baseUrl)
            cy.get('.tandem-logo').should('be.visible')
        })

        describe('When I click on The App link', () => {
            before(() => {
                navbar.clickTheApp()
            })
            it('Then I should navigate to The App page', () => {
                theApp.checkImAtTheAppPage()
            })
        })

        describe('When I click on Credits Cards link', () => {
            before(() => {
                navbar.clickCreditCards()
            })

            it('Then I should navigate to Credits Cards page', () => {
                creditCards.checkImAtCreditCardsPage()
            })
        })

        describe('When I click on Fixed Savers link', () => {
            before(() => {
                navbar.clickFixedSavers()
            })
            it('Then I should navigate to Fixed Savers page', () => {
                fixerSavers.checkImAtFixedSaversPage()
            })
        })

        describe('When I click on Blog link', () => {
            before(() => {
                navbar.clickBlog()
            })
            it('Then I should navigate to Fixed Savers page', () => {
                blog.checkImAtBlogPage()
            })
        })
    })

    describe('Given I am on The Blog page', () => {
        before(() => {
            cy.visit(Cypress.config().baseUrl + 'blog')
        })

        describe('When I click on Home link', () => {
            before(() => {
                navbar.clickHome()
            })
            it('Then I should navigate to Home Page page', () => {
                home.checkImAtHomePage()
            })
        })

        describe('When I click at the Logo', () => {
            before(() => {
                navbar.clickLogo()
            })
            it('Then I should navigate to Home Page page', () => {
                home.checkImAtHomePage()
            })
        })

        describe('When I click on Get The App button', () => {
            before(() => {
                navbar.clickGetTheApp()
            })
            it('Then I should see Get The Tandem App modal', () => {
                getAppModal.isOpenAndVisible()
            })
        })
    })
})
