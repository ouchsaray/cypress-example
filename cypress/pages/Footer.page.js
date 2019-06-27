import { curryQaIdPath } from '../support/utils'

const qaId = curryQaIdPath('footer')
const selectors = {
    phoneNumber: qaId('phone-number'),
    contactHoursMessage: qaId('contact-hours'),
}

const phoneNumber = '020 3370 0970'
const contactHoursMessage =
    "We're here to help by phone and in-app chat 7 days a week - 8am to 10pm on weekdays and until 8pm on weekends."
const stolenMessage =
    'If your card is lost or stolen call us 24/7 on 0203 370 0970 and select option 1.'

export function checkPhoneNumber() {
    cy.get(selectors.phoneNumber).contains(phoneNumber)
}

export function checkContactHoursMessage() {
    cy.get(selectors.contactHoursMessage).contains(contactHoursMessage)
}

export function checkStolenMessage() {
    cy.get(selectors.contactHoursMessage).contains(stolenMessage)
}
