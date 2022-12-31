let img: HTMLImageElement
describe('Images suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}broken`)
    });
    it('Good image', () => {
        cy.get(`div > img[src='/images/Toolsqa.jpg']`).should("be.visible").then((imge) =>{
            img = imge[0] as unknown as HTMLImageElement
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    });
    it('Bad image', () => {
        cy.get(`img[src='/images/Toolsqa_1.jpg']`).should("be.visible").then((imge) =>{
            img = imge[0] as unknown as HTMLImageElement
            expect(img.naturalWidth).to.be.greaterThan(0)
        })
    });
});