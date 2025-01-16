const childNumber = 60
class TourPage {
  elements = {
    acceptButton: () => cy.get('[data-tid="banner-accept"]'),
    tourButton: () => cy.get('.desktop-menu > .menu > :nth-child(2) > a > span'),
    losAngelesLabel: () => cy.get(':nth-child(49) > .details > .city-country'),
    lATicketContainer: () => cy.get(`:nth-child(49) > .links`),
    saoPauloLabel: () => cy.get(`:nth-child(${childNumber}) > .details > .city-country`),
    spTicketContainer: () => cy.get(`:nth-child(${childNumber}) > .links`)
  }
  verifyLabels() {
    this.elements.saoPauloLabel().should("contain.text", "São Paulo, Brazil")
    this.elements.losAngelesLabel().should("contain.text", "Los Angeles, CA")
  }
  verifyTicketButton() {
    this.elements.lATicketContainer().should("contain.text", "Tickets").and("contain.text", "VIP")
    this.elements.spTicketContainer().should("contain.text", "Tickets").and("not.contain.text", "VIP")
  }
}
const tourPage = new TourPage()

describe('Verify if tickets are available', () => {
  it('passes', () => {
    cy.visit('/tour')
    // tourPage.elements.acceptButton().click()
    // tourPage.elements.tourButton().click()
    tourPage.verifyLabels()
    tourPage.verifyTicketButton()
  })
})
