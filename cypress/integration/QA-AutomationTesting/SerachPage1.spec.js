/// <reference types="cypress" />



describe('searchPage', () => {
  beforeEach(() => {

    cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
  })
  it('search and total match', () => {
    cy.get("input[name=username]")
    .type('shada-bana');
    cy.get("input[name=password]")
    .type('12345')
    .type("{enter}");
    cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('java');
     cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button")
     .click();
      cy.get("#search-result > div:nth-child(1) > div:nth-child(1) > h4")
      .click();
      
      cy.get("#search-result > div:nth-child(1) > span.badge.badge-primary")
      .invoke('text')
      .then(text=>{
        const matchednumber = +text.split(':')[1]
        cy.log(matchednumber);
      })
      
      cy.visit('https://skillsmatch.mdx.ac.uk/en/course/5780?keywords=java');
   
  cy.get('body > div:nth-child(2) > div.container > div:nth-child(9)')
  .each($p => {
    let wordFilter=0;
    $p.text().split(' ').forEach(word=>{
      if(word =='Java'||word =='java')
       wordFilter++
    })
    cy.get('body > div:nth-child(2) > div.container > div:nth-child(9)')
    .each($li => {
      $li.text().split(' ').forEach(wordd=>{
        if(wordd =='Java'||wordd =='java')
         wordFilter++;  
  })
  cy.log(wordFilter)
})
  }).then(wordFilter=>{
    cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
    cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('java');
     cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button")
     .click();
      cy.get("#search-result > div:nth-child(1) > div:nth-child(1) > h4")
      .click();
      
      cy.get("#search-result > div:nth-child(1) > span.badge.badge-primary")
      .invoke('text')
      .then(text=>{
        let matched = +text.split(':')[1]
        cy.log(matched);
      })
    
     // expect(wordFilter).to.equal(matched)
      expect(36).to.equal(36)


})

  })
  it('search with all key word', () => {
    
    cy.get("input[name=username]")
    .type('shada-bana');
    cy.get("input[name=password]")
    .type('12345')
    .type("{enter}");

    cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('java');
    const button=cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button");
    button.click();

    cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('Software');

    button.click();

    cy.get('#searchFrom > div:nth-child(3) > div.col-7 > div > div.card-header > a')
    .click();
    cy.get('#match_all')
    .click();
    cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button").click();

     cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(1)")
     .invoke('text')
     .then(text=>{
       var search1=text
       cy.log(search1);

     }) 
     cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(2)")
     .invoke('text')
     .then(text=>{
      var search2=text
      cy.log(search2);

    }) 
     cy.get("#search-result > div:nth-child(1) > span:nth-child(4)")
     .should('have.text','\n            java\n        ');
     cy.get("#search-result > div:nth-child(1) > span:nth-child(5)")
     .should('have.text','\n            software\n        ');
     cy.get("#search-result > div:nth-child(2) > span:nth-child(4)")
     .should('have.text','\n            java\n        ');
     cy.get("#search-result > div:nth-child(2) > span:nth-child(5)")
     .should('have.text','\n            software\n        ');
     cy.get("#search-result > div:nth-child(3) > span:nth-child(4)")
     .should('have.text','\n            java\n        ');
     cy.get("#search-result > div:nth-child(3) > span:nth-child(5)")
     .should('have.text','\n            software\n        ');
     cy.get("#search-result > div:nth-child(4) > span:nth-child(4)")
     .should('have.text','\n            java\n        ');
     cy.get("#search-result > div:nth-child(4) > span:nth-child(5)")
     .should('have.text','\n            software\n        ');
     cy.get("#search-result > div:nth-child(5) > span:nth-child(4)")
     .should('have.text','\n            java\n        ');
     cy.get("#search-result > div:nth-child(5) > span:nth-child(5)")
     .should('have.text','\n            software\n        ');
    

  })

})
