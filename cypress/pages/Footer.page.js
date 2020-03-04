import { curryQaIdPath } from '../support/utils'

const qaId = curryQaIdPath('footer')
const selectors = {
    contactHoursMessage: qaId('contact-hours'),
    phoneNumber: qaId('phone-number'),
}

const phoneNumber = '020 3370 0970'
const contactHoursMessage =
    'Our team are here to help 7 days a week - 8am to 10pm.'
const stolenMessage =
    'If your card is lost or stolen call us 24/7 on 020 3370 0970 and select option 1.'

export function checkPhoneNumber() {
    cy.get(selectors.phoneNumber).contains(phoneNumber)
}

export function checkContactHoursMessage() {
    cy.get(selectors.contactHoursMessage).contains(contactHoursMessage)
}

export function checkStolenMessage() {
    cy.get(selectors.contactHoursMessage).contains(stolenMessage)
}
