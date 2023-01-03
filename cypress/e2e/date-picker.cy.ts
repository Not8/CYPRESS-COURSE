describe('Date picker suite', () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}date-picker`)
    });
    it('Date picker example test', () => {
        cy.get(`#datePickerMonthYearInput`).click()
        cy.get(`.react-datepicker__month-select`).select(`9`)
        cy.get(`.react-datepicker__year-select`).select(`2002`)
        cy.findByText(`14`).click()
        cy.get(`#datePickerMonthYearInput`).should(`have.value`, `10/14/2002`)
    });
});