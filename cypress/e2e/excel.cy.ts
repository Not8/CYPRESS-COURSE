describe('Excel playground', () => {
    it('Read data from excel', () => {
        cy.parseXlsx("cypress/fixtures/Book1.xlsx").then((jsonData) =>{
            cy.log(jsonData)
            let data: [] = jsonData[0].data
            data.forEach((element) =>{
                cy.log(element[0])
                cy.log(element[1])
            })
            data.forEach(row => {
                cy.writeFile('cypress/fixtures/excelData.json', {
                    username: row[0],
                    password: row[1],
                })
            })
        })
    });
});