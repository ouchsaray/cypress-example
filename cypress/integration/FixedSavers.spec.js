import * as fixedSaver from '../pages/FixedSavers.page'

describe('== Fixed Savers ==', () => {
    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl + 'fixed-saver')
    })
    describe('Given I am on the fixed savers page', () => {
        it('Then I should see the appropriate header and info', () => {
            fixedSaver.checkImAtFixedSaversPage()
        })

        describe('When I click one year fixed saver tab', () => {
            it('Then in the description should contain the correct 1 year values', () => {
                fixedSaver.checkOneYearSaverTab()
            })
        })

        describe('When I click two year fixed saver tab', () => {
            it('Then in the description should contain the correct 2 year values', () => {
                fixedSaver.checkTwoYearSaverTab()
            })
        })

        describe('When I click three year fixed saver tab', () => {
            it('Then in the description should contain the correct 3 year values', () => {
                fixedSaver.checkThreeYearSaverTab()
            })
        })

        describe('When I click one year fixed saver radio button', () => {
            it('Then the link on the apply button should correspond to the application', () => {
                fixedSaver.checkOneYearSaverRadioButton()
            })
        })

        describe('When I click two year fixed saver radio button', () => {
            it('Then the link on the apply button should correspond to the application', () => {
                fixedSaver.checkTwoYearSaverRadioButton()
            })
        })

        describe('When I click three year fixed saver radio button', () => {
            it('Then the link on the apply button should correspond to the application', () => {
                fixedSaver.checkThreeYearSaverRadioButton()
            })
        })
    })
})
