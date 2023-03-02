describe('Database hu', () => {
    it('Database suite', () => {
        cy.task("queryDb", 'INSERT INTO CYPRESS_EXCEL(TIPO1, TIPO2) VALUES ("1", "Prueba"), ("2", "Prueba2")').then((result:any) =>{
            expect(result.affectedRows).to.equal(2);
        })
    });
});