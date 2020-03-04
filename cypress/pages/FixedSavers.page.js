const fixerSaversSection = '[data-cy="FixedSaverPage"] '
const fixedSaverTabsRow = '[data-cy=fixedSaverTabsRow]'
const fixedSaverTabs = '[data-cy=fixedSaverTabs]'
const fixedSaverOptionsContainer = '[data-cy=fixedSaverOptionsContainer]'
const fixedSaverOptionsLabel = '[data-cy=fixedSaverOptionLabel]'
const paragraphText = '[data-cy=paragraphText]'
const sendApplicationButton = '[data-cy=CTAButton]'
const oneYearSaverText =
    'The interest earned on a balance of £1,000 after 12 months will be £12.50, the interest will be paid to your linked current account on an annual basis.'
const twoYearSaverText =
    'The interest earned on a balance of £1,000 after 24 months will be £27.00, the interest will be paid to your linked current account on an annual basis.'
const threeYearSaverText =
    'The interest earned on a balance of £1,000 after 36 months will be £43.50, the interest will be paid to your linked current account on an annual basis.'
const oneYearURLParam = 'productCode=PromoFS1'
const twoYearURLParam = 'productCode=PromoFS2'
const threeYearURLParam = 'productCode=PromoFS3'

export function checkImAtFixedSaversPage() {
    cy.url().should('include', '/fixed-saver')
    checkHeader()
}

export function checkHeader() {
    cy.get(fixerSaversSection)
        .find('h1')
        .contains('SECURE YOUR SAVINGS WITH A FIXED SAVER ACCOUNT')
}

export function checkOneYearSaverTab() {
    cy.get(fixedSaverTabsRow)
        .find(fixedSaverTabs)
        .eq(0)
        .click()
    checkFixedSaverExampleText(oneYearSaverText)
}

export function checkTwoYearSaverTab() {
    cy.get(fixedSaverTabsRow)
        .find(fixedSaverTabs)
        .eq(1)
        .click()
    checkFixedSaverExampleText(twoYearSaverText)
}

export function checkThreeYearSaverTab() {
    cy.get(fixedSaverTabsRow)
        .find(fixedSaverTabs)
        .eq(2)
        .click()
    checkFixedSaverExampleText(threeYearSaverText)
}

export function checkFixedSaverExampleText(text) {
    cy.get(paragraphText).contains(text)
}

export function checkOneYearSaverRadioButton() {
    cy.get(fixedSaverOptionsContainer)
        .eq(0)
        .find(fixedSaverOptionsLabel)
        .click()
    checkApplicationPageURL(oneYearURLParam)
}

export function checkTwoYearSaverRadioButton() {
    cy.get(fixedSaverOptionsContainer)
        .eq(1)
        .find(fixedSaverOptionsLabel)
        .click()
    checkApplicationPageURL(twoYearURLParam)
}

export function checkThreeYearSaverRadioButton() {
    cy.get(fixedSaverOptionsContainer)
        .eq(2)
        .find(fixedSaverOptionsLabel)
        .click()
    checkApplicationPageURL(threeYearURLParam)
}

export function checkApplicationPageURL(parameter) {
    cy.get(sendApplicationButton)
        .eq(1)
        .should('have.attr', 'href')
        .and('include', parameter)
}
