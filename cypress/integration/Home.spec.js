import * as home from '../pages/Home.page'
import * as getAppModal from '../pages/GetAppModal.page'
import * as theApp from '../pages/TheApp.page'
import * as creditCards from '../pages/CreditCards.page'
import * as fixerSavers from '../pages/FixedSavers.page'
import * as navbar from '../pages/NavBar.page'
import * as footer from '../pages/Footer.page'

describe('== HOME PAGE ==', () => {
    before(() => {
        cy.visit(Cypress.config().baseUrl)
        cy.get('.tandem-logo').should('be.visible')
    })

    describe('Given GET THE APP top section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkGetTheAppSectionHeader()
            home.checkGetTheAppSectionParagraph()
        })

        describe('When I click on Apply Now Button', () => {
            before(() => {
                home.openApplyNowModal()
            })

            it('Then I should see GET THE APP modal', () => {
                getAppModal.isOpenAndVisible()
            })
        })

        describe('When I click close', () => {
            before(() => {
                getAppModal.closeModal()
            })

            it('Then I should not see the GET THE APP modal ', () => {
                getAppModal.isNotVisible()
            })

            it('Then I should be at the Home Page again', () => {
                home.checkImAtHomePage()
            })
        })
    })

    describe('Given THE TANDEM APP section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkTheTandemAppSectionHeader()
            home.checkTheTandemAppSectionParagraph()
        })

        describe('When I click on Find Out More', () => {
            before(() => {
                home.clickOnFindOutMore()
            })

            it('Then I should go to The App page', () => {
                theApp.checkImAtTheAppPage()
            })
        })

        describe('When I click to Home link', () => {
            before(() => {
                navbar.clickHome()
            })

            it('Then I should see the Home Page again', () => {
                home.checkImAtHomePage()
            })
        })
    })

    describe('Given THE TANDEM CREDIT CARDS section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkCreditCardsSectionHeader()
            home.checkCreditCardsSectionParagraph()
        })

        describe('When I click on Find Out More & Apply', () => {
            before(() => {
                home.clickOnFindOutMoreAndApplyForCreditCard()
            })

            it('Then I should go to The App page', () => {
                creditCards.checkImAtCreditCardsPage()
            })
        })

        describe('When I click to Home link', () => {
            before(() => {
                navbar.clickHome()
            })

            it('Then I should see the Home Page again', () => {
                home.checkImAtHomePage()
            })
        })
    })

    describe('Given THE FIXED SAVER ACCOUNT section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkFixedSaverAccountSectionHeader()
            home.checkFixedSaverAccountSectionParagraph()
        })

        describe('When I click on Find Out More & Apply', () => {
            before(() => {
                home.clickOnFindOutMoreAndApplyForFixedSaver()
            })

            it('Then I should go to The App page', () => {
                fixerSavers.checkImAtFixedSaversPage()
            })
        })

        describe('When I click to Home link', () => {
            before(() => {
                navbar.clickHome()
            })

            it('Then I should see the Home Page again', () => {
                home.checkImAtHomePage()
            })
        })
    })

    describe('Given GET THE APP bottom section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkGetTheAppBottomSectionHeader()
            home.checkGetTheAppBottomSectionParagraph()
        })
    })

    describe('Given A WIN-WIN PARTNERSHIP section', () => {
        it('Then I should see the appropriate title and paragraph', () => {
            home.checkWinWinPartnershipSectionHeader()
            home.checkWinWinPartnershipParagraphs()
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
