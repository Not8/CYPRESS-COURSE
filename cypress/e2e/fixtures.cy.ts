import { testData } from "./model";

describe('Fixtures suite', () => {
    it('Fixtures example', () => {
        cy.fixture(`example`).then((json: testData) =>{
            cy.log(json.name)
        })
    });
});