import * as getAppModal from '../pages/GetAppModal.page'
import * as theApp from '../pages/TheApp.page'
import * as navbar from '../pages/NavBar.page'

describe('== THE APP PAGE ==', () => {
    describe('Given I am on the Tandem Website', () => {
        before(() => {
            cy.visit(Cypress.config().baseUrl)
        })

        describe('When I click on The App link', () => {
            before(() => {
                navbar.clickTheApp()
            })

            it('Then I should navigate to The App page', () => {
                theApp.checkImAtTheAppPage()
            })

            it('Then I should see the appropriate title and paragraph', () => {
                theApp.checkGetTheAppSectionHeader()
            })

            it('Then I should see the correct text being displayed for each feature', () => {
                theApp.checkHighlightsText()
                theApp.checkSpendingMoneyText()
                theApp.checkSwitchingText()
            })

            describe('And I click on GET THE APP button', () => {
                before(() => {
                    theApp.clickGetTheAppButton()
                })

                it('Then I should see GET THE APP modal', () => {
                    getAppModal.isOpenAndVisible()
                })

                it('Then I should see the iOS Button', () => {
                    getAppModal.checkiOSButtonIsVisible()
                })

                it('Then I should see the Android Button', () => {
                    getAppModal.checkAndroidButtonIsVisible()
                })
            })
        })
    })
})
