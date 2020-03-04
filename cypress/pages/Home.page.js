const creditCardSection = '[data-cy=FeatureListItem-tandem-credit-cards]'
const fixerSaversSection = '[data-cy=FeatureListItem-the-fixed-saver-account]'
const ctaButton = '[data-cy=CTAButton]'
const featureTitle = '[data-cy=FeatureListItemTitle]'
const featureDescription = '[data-cy=FeatureListItemDescription]'

export function checkImAtHomePage() {
    cy.location('pathname').should('eq', '/')
}

export function checkCreditCardsSectionHeader() {
    cy.get(creditCardSection).within(() => {
        cy.get(featureTitle).contains('Tandem credit cards')
    })
}

export function checkCreditCardsSectionParagraph() {
    cy.get(creditCardSection).within(() => {
        cy.get(featureDescription).contains(
            'Get the same benefits abroad or at home with a Tandem credit card. With no fees on purchases abroad and instant in-app spending alerts, they’re the perfect travel companion'
        )
    })
}

export function clickOnFindOutMoreAndApplyForCreditCard() {
    cy.get(creditCardSection).within(() => {
        cy.get(ctaButton)
            .should('be.visible')
            .click()
    })
}

export function checkFixedSaverAccountSectionHeader() {
    cy.get(fixerSaversSection).within(() => {
        cy.get(featureTitle).contains('The Fixed Saver Account')
    })
}

export function checkFixedSaverAccountSectionParagraph() {
    cy.get(fixerSaversSection).within(() => {
        cy.get(featureDescription).contains(
            "Put aside a pot of money towards whatever means the most to you. With a fixed interest rate, you'll know exactly how much your money will grow"
        )
    })
}

export function clickOnFindOutMoreAndApplyForFixedSaver() {
    cy.get(fixerSaversSection).within(() => {
        cy.get(ctaButton)
            .should('be.visible')
            .click()
    })
}
