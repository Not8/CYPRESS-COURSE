import { User } from "./model";

describe('Array', () => {

    it('Objects array', () => {
        cy.fixture<{users: User[]}>(`example`).its(`users`).then((users) => {
            users.forEach((element) => {
                cy.log("", element)
            })
        })
    });
});