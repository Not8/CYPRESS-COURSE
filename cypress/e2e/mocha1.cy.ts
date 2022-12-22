describe('Typescript suite', () => {
  it('test', () => {
    let auxiliar = '3';
    for(let i = 0; i< 3; i++){
      cy.log(auxiliar)
    }
    let user:User={username:'wasd', password:'1234'}
    cy.log(sum(4,5,user).toString())
  })

  function sum(a: number, b:number, user:User):number{
    cy.log("Username: "+user.username+"\nPassword: "+user.password)
    return a + b
  }

  interface User{
    username: String
    password: String
  }
})