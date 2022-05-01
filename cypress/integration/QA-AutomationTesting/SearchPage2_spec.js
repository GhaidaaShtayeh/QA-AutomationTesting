
describe('Search Page ', function () {
    beforeEach(() => {

        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
    })
    it("Translate keyword testing", function () {
        cy.get("input[name=username]").type("00");
        cy.get("input[name=password]").type("00").type("{enter}");
        cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span").type("برمجة");
        cy.get(".card-link").click({ force: true });
        cy.get("#translateInput").select("en");
        cy.get("[test-data=searchButton]").click({ force: true });
        cy.get("#search-result").click({ force: true });
        cy.get('[test-data=MatchedKeywords]').each((item) => {
            cy.wrap(item).should('contain.text', 'programming')
        })

    })
    it("User Review Testing ", function () {
        cy.get("input[name=username]").type("00");
        cy.get("input[name=password]").type("00").type("{enter}");
        cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span").type("python");
        cy.get(".card-link").click({ force: true });
        cy.get("[test-data=sort_by_user_reviews]").click({ force: true });
        cy.get("[test-data=searchButton]").click({ force: true });
        cy.get("#search-result").click({ force: true });

        cy.get(['#search-result > div:nth-child(2) > div.ratingme.smallRate'])
            .its('length')
            .then((size) => {
                cy.get(['#search-result > div:nth-child(1) > div.ratingme.smallRate'])
                    .its('length')
                    .should('be.gte', size)
            })



    })


});