/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    checkStyles(
      element: HTMLElement | JQuery<HTMLElement>,
      letter: string,
      color: string
    ): void;
  }
}
