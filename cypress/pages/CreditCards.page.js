export function checkImAtCreditCardsPage() {
    cy.url().should('include', '/credit-cards')
    checkHeader()
}

export function checkHeader() {
    cy.get('[data-cy=CardChoicePageHeader]').contains(
        'Tandem credit cards for home and abroad'
    )
}

export function clickCashbackChoice() {
    cy.get('[data-cy=CardUnavailable]')
        .eq(0)
        .find('[data-cy=GetEarlyAccess]')
        .click()
}

export function clickJourneyChoice() {
    cy.get('[data-cy=CardChoice]')
        .eq(0)
        .find('[data-cy=FindOutMore]')
        .click()
}
