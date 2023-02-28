import { testData } from "./model";

describe('Sharing suite', () => {
    beforeEach(() => {
        cy.fixture(`example`).as(`jsonExample`)
    });

    it('Wasd fixture to share', () => {
        cy.get<testData>(`@jsonExample`).then((testData) =>{
            cy.log(``,testData.name)
        })
    });
});