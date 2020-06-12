import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I open on Login`, () => {
  cy.visit("/");
});

Given(`I open the home page`, () => {
  cy.visit("/home");
});

Given(`I open the works page`, () => {
  cy.visit("/works");
});
