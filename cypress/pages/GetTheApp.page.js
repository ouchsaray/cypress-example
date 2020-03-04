const getTheApp = '[data-cy=GetTheApp]'

export function checkHeader() {
    cy.get(getTheApp)
        .find('h2')
        .should('Download the free Tandem App')
}

export function isOpenAndVisible() {
    cy.get(getTheApp).should('be.visible')
}

export function checkiOSButtonIsVisible() {
    cy.get(getTheApp)
        .find('[data-cy=AppleStore]')
        .should('be.visible')
}

export function checkAndroidButtonIsVisible() {
    cy.get(getTheApp)
        .find('[data-cy=GooglePlay]')
        .should('be.visible')
}

export function closeModal() {
    cy.get('[data-cy=CloseGetTheAppModal]').click()
}

export function isNotVisible() {
    cy.get(getTheApp).should('not.be.visible')
}
