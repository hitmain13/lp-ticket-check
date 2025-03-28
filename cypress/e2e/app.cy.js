// const childNumber = 58
// const losAngelesChildNumber = childNumber - 11
// class TourPage {
//   elements = {
//     acceptButton: () => cy.get('[data-tid="banner-accept"]'),
//     tourButton: () => cy.get('.desktop-menu > .menu > :nth-child(2) > a > span'),
//     losAngelesLabel: () => cy.get(`:nth-child(${losAngelesChildNumber}) > .details > .city-country`),
//     lATicketContainer: () => cy.get(`:nth-child(${losAngelesChildNumber}) > .links`),
//     saoPauloLabel: () => cy.get(`:nth-child(${childNumber}) > .details > .city-country`),
//     spTicketContainer: () => cy.get(`:nth-child(${childNumber}) > .details > .city-country`)
//   }
//   verifyLabels() {
//     this.elements.saoPauloLabel().should("contain.text", "São Paulo, Brazil")
//     // this.elements.losAngelesLabel().should("contain.text", "Los Angeles, CA")
//   }
//   verifyTicketButton() {
//     this.elements.spTicketContainer().should("contain.text", "Tickets").and("not.contain.text", "VIP")
//     this.elements.lATicketContainer().should("contain.text", "Tickets").and("contain.text", "VIP")
//   }
// }

// const tourPage = new TourPage()

// describe('Verify if tickets are available', () => {
//   it('passes', () => {
//     cy.visit('/tour', { failOnStatusCode: false })
//     // tourPage.elements.acceptButton().click()
//     // tourPage.elements.tourButton().click()
//     tourPage.verifyLabels()
//     tourPage.verifyTicketButton()
//   })
// })


class TourPage {
  elements = {
    cityContainer: (cityName) => cy.contains('.tour-dates .city-country', cityName).parent(),
  }

  verifyLabels() {
    this.elements.cityContainer("São Paulo, Brazil").should("exist");
  }

  verifyLabelsNotExist() {
    cy.contains('.tour-dates .city-country', "São Paulo, Brazil").should('not.exist');
  }

  verifyTicketButton() {
    this.elements.cityContainer("São Paulo, Brazil").parent().within(() => {
      cy.get('.links')
      .should("contain.text", "Tickets")
      .should("not.contain.text", "VIP")
    });
  }
}

const tourPage = new TourPage();

describe("Verify if tickets are available", () => {
  it("verifica se tem a label São Paulo, Brazil", () => {
    cy.visit("/tour", { failOnStatusCode: false });
    cy.wait(3000);
    tourPage.verifyLabels();
    // tourPage.verifyTicketButton();
    // tourPage.verifyLabelsNotExist();
  });
});
