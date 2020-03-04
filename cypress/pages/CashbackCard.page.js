export function checkImAtCashbackCardPage() {
    cy.url().should('include', '/credit-card')
}
