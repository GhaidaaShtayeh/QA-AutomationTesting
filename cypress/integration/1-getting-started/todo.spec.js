/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {

    cy.visit('https://skillsmatch.mdx.ac.uk/en/profile/')
  })

  it('Log In to the system', () => {
    cy.get("input[name=username]").type('test3');
    cy.get("input[name=password]").type('00966121222').type("{enter}");
    cy.get('body > div:nth-child(2) > div.container > a').click();
    cy.get('[test-data="StartUpdatingMySkills"]').click();

    cy.get('[test-data="answer_2"]').first().check()
    cy.get('[test-data="NextStep"]').click();
    

    cy.get('[test-data="area_2"]')
      .siblings('.form-check')              
      .find('[test-data="answer_2"]')    
      .check({force: true})
      .should('be.checked')  

    cy.get('#answerForm > fieldset:nth-child(4) > input.next.action-button').click({force: true});

    cy.get('[test-data="area_3"]')
      .siblings('.form-check')              
      .find('[test-data="answer_4"]')    
      .check({force: true})
      .should('be.checked')  

    cy.get('#answerForm > fieldset:nth-child(5) > input.next.action-button').click({force: true});

    cy.get('[test-data="area_4"]')
      .siblings('.form-check')              
      .find('[test-data="answer_5"]')    
      .check({force: true})
      .should('be.checked')  
      
    cy.get('#answerForm > fieldset:nth-child(6) > input.next.action-button').click({force: true});

    cy.get('[test-data="area_5"]')
    .siblings('.form-check')              
    .find('[test-data="answer_1"]')    
    .check({force: true})
    .should('be.checked')  
    
    cy.get('#answerForm > fieldset:nth-child(7) > input.next.action-button').click({force: true});

    cy.get('[test-data="area_6"]')
    .siblings('.form-check')              
    .find('[test-data="answer_2"]')    
    .check({force: true})
    .should('be.checked')
    cy.get('#answerForm > fieldset:nth-child(8) > input.next.action-button').click({force: true});

    cy.get('[test-data="area_7"]')
    .siblings('.form-check')              
    .find('[test-data="answer_4"]')    
    .check({force: true})
    .should('be.checked')
    cy.get('#answerForm > fieldset:nth-child(9) > input.next.action-button').click({force: true});

    cy.get('[test-data="area_8"]')
    .siblings('.form-check')
    .find('[test-data="answer_4"]')    
    .check({force: true})
    .should('be.checked')

    cy.get('[test-data="Confirm"]').click({force: true});


  cy.get('[test-data="area_1_Scor"]', { timeout: 2000 })
  .invoke('text')
  .then(text => {
    const numerator = +text.split('/')[0].replace('(', '')
    const denominator = +text.split('/')[1].replace(')', '')
    const rate = numerator * 5 / denominator;
    const x = Math.round(rate)
    cy.log(x);

    cy.get('[ test-data="area_1_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });

  cy.get('[test-data="area_2_Scor"]', { timeout: 2000 })
  .invoke('text')
  .then(text => {
    const numerator = +text.split('/')[0].replace('(', '')
    const denominator = +text.split('/')[1].replace(')', '')
    const rate = numerator * 5 / denominator;
    const x = Math.round(rate)
    cy.log(x);

    cy.get('[ test-data="area_2_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });

  cy.get('[test-data="area_3_Scor"]', { timeout: 2000 })
  .invoke('text')
  .then(text => {
    const numerator = +text.split('/')[0].replace('(', '')
    const denominator = +text.split('/')[1].replace(')', '')
    const rate = numerator * 5 / denominator;
    const x = Math.round(rate)
    cy.log(x);

    cy.get('[ test-data="area_3_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });

  cy.get('[test-data="area_4_Scor"]', { timeout: 2000 })
  .invoke('text')
  .then(text => {
    const numerator = +text.split('/')[0].replace('(', '')
    const denominator = +text.split('/')[1].replace(')', '')
    const rate = numerator * 5 / denominator;
    const x = Math.round(rate)
    cy.log(x);

    cy.get('[ test-data="area_4_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });

  cy.get('[test-data="area_5_Scor"]', { timeout: 2000 })
  .invoke('text')
  .then(text => {
    const numerator = +text.split('/')[0].replace('(', '')
    const denominator = +text.split('/')[1].replace(')', '')
    const rate = numerator * 5 / denominator;
    const x = Math.round(rate)
    cy.log(x);

    cy.get('[ test-data="area_5_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });

  cy.get('[test-data="area_6_Scor"]', { timeout: 2000 })
  .invoke('text')
  .then(text => {
    const numerator = +text.split('/')[0].replace('(', '')
    const denominator = +text.split('/')[1].replace(')', '')
    const rate = numerator * 5 / denominator;
    const x = Math.round(rate)
    cy.log(x);

    cy.get('[ test-data="area_6_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });

})



  })


  // From alias, using `this` 

 
