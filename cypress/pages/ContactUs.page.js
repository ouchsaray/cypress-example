import { curryQaIdPath } from '../support/utils'

const qaId = curryQaIdPath('contact-us-page')
const selectors = {
    heading: qaId('heading'),
    phoneNumber: qaId('phone-number'),
    contactHoursMessage: qaId('contact-hours'),
}

const heading = 'Get in touch'
const phoneNumber = '020 3370 0970'
const contactHoursMessage =
    'If your card is lost or stolen, we can sort it out 24/7. Otherwise, we’re here to help Monday to Friday from 8am-10pm, except Bank Holidays, and weekends until 8pm'

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
