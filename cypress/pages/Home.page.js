const slidingSection = '[data-cy=SlidingHero] '
const tandemAppSection = '[data-cy=FeatureList] > :nth-child(1) '
const creditCardSection = '[data-cy=FeatureList] > :nth-child(2) '
const fixerSaversSection = '[data-cy=FeatureList] > :nth-child(3) '
const getTheAppSection = '[data-cy=GetTheApp]'
const winWinSection = '[data-cy=ImageInfoBlock]'

export function checkImAtHomePage() {
    cy.url().should('eq', Cypress.config().baseUrl)
    checkGetTheAppSectionHeader()
}

export function openApplyNowModal() {
    cy.get(slidingSection + '[data-cy=CTAButton]').click()
}

export function checkGetTheAppSectionHeader() {
    cy.get(slidingSection + 'h1').contains(`A bank that's rooting for you`)
}

export function checkGetTheAppSectionParagraph() {
    cy.get(slidingSection + 'p').contains(
        `We're on a mission to free you of money misery. Our app, card and savings account are designed to help you spend less time worrying about money and more time enjoying life.`
    )
}

export function checkTheTandemAppSectionHeader() {
    cy.get(tandemAppSection + 'h2').contains('The Tandem App')
}

export function checkTheTandemAppSectionParagraph() {
    cy.get(tandemAppSection + 'p').contains(
        'Manage all your bank accounts with a single app. We show you how much you can spend each month and find you better deals so you can save on bills.'
    )
}

export function clickOnFindOutMore() {
    cy.get(tandemAppSection + '.button--tandem')
        .should('be.visible')
        .click()
}

export function checkCreditCardsSectionHeader() {
    cy.get(creditCardSection + 'h2').contains('The Tandem Credit Cards')
}

export function checkCreditCardsSectionParagraph() {
    cy.get(creditCardSection + 'p').contains(
        `Get the same benefits abroad or at home with a Tandem credit card. With no fees on purchases abroad and instant in-app spending alerts, they’re the perfect travel companion.`
    )
}

export function clickOnFindOutMoreAndApplyForCreditCard() {
    cy.get(creditCardSection + '.button__content')
        .should('be.visible')
        .click()
}

export function checkFixedSaverAccountSectionHeader() {
    cy.get(fixerSaversSection + 'h2').contains('The Fixed Saver Account')
}

export function checkFixedSaverAccountSectionParagraph() {
    cy.get(fixerSaversSection + 'p').contains(
        `Put aside a pot of money towards whatever means the most to you. With a fixed interest rate, you'll know exactly how much your money will grow.`
    )
}

export function clickOnFindOutMoreAndApplyForFixedSaver() {
    cy.get(fixerSaversSection + '.button--mint')
        .should('be.visible')
        .click()
}

export function checkGetTheAppBottomSectionHeader() {
    cy.get(getTheAppSection)
        .find('h2')
        .contains('Get the Tandem app')
}

export function checkGetTheAppBottomSectionParagraph() {
    cy.get(getTheAppSection)
        .find('p')
        .contains(
            'Money misery no more. Start your journey towards financial freedom.'
        )
}

export function checkWinWinPartnershipSectionHeader() {
    cy.get(winWinSection)
        .find('h2')
        .contains('A win-win partnership')
}

export function checkWinWinPartnershipParagraphs() {
    cy.get(winWinSection)
        .find(':nth-child(2)')
        .contains(
            'We want to do more to help customers avoid unfair and unnecessary fees and charges.'
        )
    cy.get(winWinSection)
        .find(':nth-child(3)')
        .contains(
            `We don't want to make money from the mistakes of our customers, so we've built a business that makes money when our customers do well.`
        )
}
