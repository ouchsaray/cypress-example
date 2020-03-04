export const logo = '[data-cy=BlackLogo]'
export const navBar = '[data-cy=NavigationBar]'

const home = '[data-cy=home]'
const creditCards = '[data-cy=credit-cards]'
const fixedSavers = '[data-cy=fixed-savers]'
const blog = '[data-cy=blog]'
const getAppButton = '[data-cy=CTAButton]'

export function clickLogo() {
    cy.get(logo).click()
}

export function clickHome() {
    cy.get(navBar).within(() => {
        cy.get(home)
            .first()
            .click()
    })
}

export function clickCreditCards() {
    cy.get(navBar).within(() => {
        cy.get(creditCards)
            .first()
            .click()
    })
}

export function clickFixedSavers() {
    cy.get(navBar).within(() => {
        cy.get(fixedSavers)
            .first()
            .click()
    })
}

export function clickBlog() {
    cy.get(navBar).within(() => {
        cy.get(blog)
            .first()
            .click()
    })
}

export function clickGetTheApp() {
    cy.get(navBar).within(() => {
        cy.get(getAppButton).click()
    })
}
