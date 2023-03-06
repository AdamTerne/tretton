describe("template spec", () => {
  it("Can access the page", () => {
    cy.visit("https://tretton-aw3n.vercel.app/");
  });

  it("Employee has a name", () => {
    cy.visit("https://tretton-aw3n.vercel.app/");
    cy.get('[data-cy="employee-card"]').first().as("firstEmployee");
    cy.get("@firstEmployee").get('[data-cy="employee-name"]').should("not.be.empty");
  });

  it("Links to twitter", () => {
    cy.visit("https://tretton-aw3n.vercel.app/");
    cy.get('[data-cy="twitter-link"]').first().as("firstTwitterLink");
    cy.get("@firstTwitterLink").invoke("attr", "href").should("include", "https://www.twitter.com");
  });

  it("Has buttons for sorting", () => {
    cy.visit("https://tretton-aw3n.vercel.app/");
    cy.get('[data-cy="sorting-name"]');
    cy.get('[data-cy="sorting-office"]');
  });
});

export {};
