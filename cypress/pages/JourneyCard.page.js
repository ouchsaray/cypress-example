export function checkImAtJourneyCardPage() {
    cy.url().should('include', '/journey-card')
}
