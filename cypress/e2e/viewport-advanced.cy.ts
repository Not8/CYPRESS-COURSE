import { isMobile } from "../support/utils";

describe('Viewport', () => {
    const viewportsToTest: Cypress.ViewportPreset[] = ['ipad-2', 'macbook-11']
    viewportsToTest.forEach(viewport => {
        it(`Viewport  ${viewport}`, () => {
            
        });
    });
});
describe('Hybrid suite', () => {
    it('Main menu test', () => {
        cy.log(`Desktop validation`)
        if(isMobile()){
            cy.log(`Mobile app`)
        }
    });
});