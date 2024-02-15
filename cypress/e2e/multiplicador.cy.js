describe("Multiplicador", () => {
  it("Shows the amount of the addition to the user", () => {
    cy.visit("/");
    cy.get("#primer-numero-M").type(4);
    cy.get("#segundo-numero-M").type(5);
    cy.get("#multiplicar-button").click();
    cy.get("#resultado-multiplicacion-div").should("contain", "20");
  });
});
