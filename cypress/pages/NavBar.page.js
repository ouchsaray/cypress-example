const logo = '.navbar__left > .tandem-logo'
const navLink = ' > .navigation-link'
const getAppButton = '.navbar__full-site-grid [data-cy=CTAButton]'

export function clickLogo() {
    cy.get(logo).click()
}

export function clickHome() {
    cy.get(':nth-child(1)' + navLink)
        .first()
        .click()
}

export function clickTheApp() {
    cy.get(':nth-child(2)' + navLink)
        .first()
        .click()
}

export function clickCreditCards() {
    cy.get(':nth-child(3)' + navLink)
        .first()
        .click()
}

export function clickFixedSavers() {
    cy.get(':nth-child(4)' + navLink).click()
}

export function clickBlog() {
    cy.get(':nth-child(5)' + navLink).click()
}

export function clickGetTheApp() {
    cy.get(getAppButton).click()
}
