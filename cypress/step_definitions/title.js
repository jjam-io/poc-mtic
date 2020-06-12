import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see a title with {string}`, (title) => {
  cy.get("[data-cy=title]").should("contain", title);
});
