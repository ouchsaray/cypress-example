import { curryQaIdPath } from '../support/utils'

const qaId = curryQaIdPath('contact-us-page')
const selectors = {
    contactHoursMessage: qaId('contact-hours'),
    heading: qaId('heading'),
    phoneNumber: qaId('phone-number'),
}

const heading = 'Get in touch'
const phoneNumber = '020 3370 0970'
const contactHoursMessage =
    'If your card is lost or stolen, we can sort it out 24/7. Otherwise our team are here to help 7 days a week - 8am to 10pm.'

export function checkImAtContactUsPage() {
    cy.url().should('include', '/contact-us')
    checkHeader()
}

export function checkHeader() {
    cy.get(selectors.heading).contains(heading)
}

export function checkPhoneNumber() {
    cy.get(selectors.phoneNumber).contains(phoneNumber)
}

export function checkContactHoursMessage() {
    cy.get(selectors.contactHoursMessage).contains(contactHoursMessage)
}
