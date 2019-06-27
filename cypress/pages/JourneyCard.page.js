const header = '.product-header__catchphrase'

export function checkImAtJourneyCardPage() {
    cy.url().should('include', '/journey-card')
    checkHeader()
}

export function checkHeader() {
    cy.get(header).contains(
        'Help build a better credit score with the Journey Credit Card'
    )
}
