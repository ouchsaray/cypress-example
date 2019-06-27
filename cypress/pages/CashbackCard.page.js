const header = '.cashback__header.cashback__header--no-fees'

export function checkImAtCashbackCardPage() {
    cy.url().should('include', '/credit-card')
    checkHeader()
}

export function checkHeader() {
    cy.get(header).contains('GET CASHBACK ON YOUR SPEND')
}
