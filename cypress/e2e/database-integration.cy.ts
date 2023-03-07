describe('Database hu', () => {
    it('Database suite insert', () => {
        cy.task("queryDb", 'INSERT INTO CYPRESS_EXCEL(TIPO, DESCRIPCION) VALUES ("1", "Prueba"), ("2", "Prueba2")').then((result:any) =>{
            expect(result.affectedRows).to.equal(2);
        })
    });

    it('Database suite select', () => {
        cy.task("queryDb", 'SELECT * FROM CYPRESS_EXCEL;').then((result:any) =>{
            expect(result[0].TIPO).to.equal("1");
            expect(result[0].DESCRIPCION).to.equal("Prueba");
            expect(result[1].TIPO).to.equal("2");
            expect(result[1].DESCRIPCION).to.equal("Prueba2");
        })
    });

    it('Database suite update', () => {
        cy.task("queryDb", 'UPDATE CYPRESS_EXCEL SET DESCRIPCION = "Prueba1" WHERE TIPO = "1";').then((result:any) =>{
            expect(result.affectedRows).to.equal(1);
        })
    });
});