const theAppSection = '.cash-finder-top-video__'
const featureContentText = '.cash-finder-picture-features__content-text'
const getTheAppButton =
    '.cash-finder-top-video__cta.button--tandem.button--blue.button'

export function checkImAtTheAppPage() {
    cy.url().should('include', '/the-app')
    checkGetTheAppSectionHeader()
}

export function checkGetTheAppSectionHeader() {
    cy.get(theAppSection + 'catchphrase').contains(
        `MONEY TAKEN CARE OF SO YOUR LIFE'S WELL SPENT`
    )
}

export function checkGetTheAppSectionParagraph() {
    cy.get(theAppSection + 'paragraph').contains(
        `Tandem is rethinking banking. We're starting with an app that helps you manage your money. Here are some of the features we have right now.`
    )
}

export function checkSpendingMoneyText() {
    cy.get(featureContentText).contains(
        `We automatically show you how much you can spend each month`
    )
}

export function checkHighlightsText() {
    cy.get(featureContentText).contains(
        `We alert you when we notice your bills increase or a payment comes in`
    )
}

export function checkSwitchingText() {
    cy.get(featureContentText).contains(
        `We help reduce your bills by finding you better deals to save you money`
    )
}

export function clickGetTheAppButton() {
    cy.get(getTheAppButton).click()
}
