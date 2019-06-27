export function checkHeader() {
    cy.get('[data-cy=GetTheAppModal]')
        .find('h2')
        .should('Get the tandem app')
}

export function isOpenAndVisible() {
    cy.get('[data-cy="GetTheAppModal"]').should('be.visible')
}

export function verifyTextsOnModal() {
    cy.get(cy.get('[data-cy=GetTheAppModal]').find('p')).should(
        'Money misery no more. Start your journey towards financial freedom.'
    )
}

export function checkiOSButtonIsVisible() {
    cy.get('[data-cy=GetTheAppModal]')
        .find('[data-cy=AppleStore]')
        .should('be.visible')
}

export function checkAndroidButtonIsVisible() {
    cy.get('[data-cy=GetTheAppModal]')
        .find('[data-cy=GooglePlay]')
        .should('be.visible')
}

export function closeModal() {
    cy.get('[data-cy=CloseGetTheAppModal]').click()
}

export function isNotVisible() {
    cy.get('[data-cy=GetTheAppModal]').should('not.be.visible')
}
