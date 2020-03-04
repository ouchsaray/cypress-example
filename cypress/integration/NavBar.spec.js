import * as navbar from '../pages/NavBar.page'
import * as home from '../pages/Home.page'
import * as getTheApp from '../pages/GetTheApp.page'
import * as creditCards from '../pages/CreditCards.page'
import * as fixerSavers from '../pages/FixedSavers.page'
import * as blog from '../pages/Blog.page'

describe('== NAVBAR ==', () => {
    describe('Given I am on the Tandem Website', () => {
        beforeEach(() => {
            cy.visit('/')
            cy.get(navbar.logo).should('be.visible')
        })

        describe('When I click on Credits Cards link', () => {
            beforeEach(() => {
                navbar.clickCreditCards()
            })

            it('Then I should navigate to Credits Cards page', () => {
                creditCards.checkImAtCreditCardsPage()
            })
        })

        describe('When I click on Fixed Savers link', () => {
            beforeEach(() => {
                navbar.clickFixedSavers()
            })
            it('Then I should navigate to Fixed Savers page', () => {
                fixerSavers.checkImAtFixedSaversPage()
            })
        })

        describe('When I click on Blog link', () => {
            beforeEach(() => {
                navbar.clickBlog()
            })
            it('Then I should navigate to Fixed Savers page', () => {
                blog.checkImAtBlogPage()
            })
        })
    })

    describe('Given I am on The Blog page', () => {
        beforeEach(() => {
            cy.visit('/blog')
            cy.get(navbar.logo).should('be.visible')
        })

        describe('When I click on Home link', () => {
            beforeEach(() => {
                navbar.clickHome()
            })
            it('Then I should navigate to Home page', () => {
                home.checkImAtHomePage()
            })
        })

        describe('When I click at the Logo', () => {
            beforeEach(() => {
                navbar.clickLogo()
            })
            it('Then I should navigate to Home page', () => {
                home.checkImAtHomePage()
            })
        })

        describe('When I click on Get The App button', () => {
            beforeEach(() => {
                navbar.clickGetTheApp()
            })
            it('Then I should see the Download The Free Tandem App modal', () => {
                getTheApp.isOpenAndVisible()
            })
        })
    })
})
