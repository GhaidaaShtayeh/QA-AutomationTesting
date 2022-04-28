# QA-AutomationTesting


# Update MY Skills Profile - Ghaidaa Shtayeh

![image](https://user-images.githubusercontent.com/79005401/165772758-054055b7-fccb-4994-b99f-753905574964.png)

```
describe('Update Profile', () => {
  beforeEach(() => {

    cy.visit('https://skillsmatch.mdx.ac.uk/en/profile/')
  })
```

  
Visit skill Match Profile Page by entring directly to the link attached, then show it in cypress page 

After that it's required to log in to the system, so i entered it t make it accessable and start with first question 

```
it('Log In to the system', () => {

    cy.get("input[name=username]").type('test3');
    
    cy.get("input[name=password]").type('00966121222').type("{enter}");
    
    cy.get('body > div:nth-child(2) > div.container > a').click();
    
    cy.get('[test-data="StartUpdatingMySkills"]').click();
```
   
   
 Then start answering questions, testing all possible cases, Same answer for every area 
 
 area 2 answering all questions with 2 aand check if checking happened 
 
 - checking here not required but i put it to make follow the code more esaier 
 
 
    ```
    cy.get('[test-data="area_2"]')
    
      .siblings('.form-check')     
      
      .find('[test-data="answer_2"]') 
      
      .check({force: true})
      
      .should('be.checked')
      
      ```
      
   
   Click next Button :
   
`    cy.get('#answerForm > fieldset:nth-child(4) > input.next.action-button').click({force: true});`

Third Area :

```    cy.get('[test-data="area_3"]')
      .siblings('.form-check')              
      .find('[test-data="answer_4"]')    
      .check({force: true})
      .should('be.checked')  
      
      cy.get('#answerForm > fieldset:nth-child(5) > input.next.action-button').click({force: true});

```

Fourh Area :

```    cy.get('[test-data="area_4"]')

      .siblings('.form-check')      
      
      .find('[test-data="answer_5"]')  
      
      .check({force: true})
      
      .should('be.checked')  
      
    cy.get('#answerForm > fieldset:nth-child(6) > input.next.action-button').click({force: true});
    
 ```
 
 
 and so on for all others areas  
 
 ### Now here we checking answers (scores) and stars that appears :
 
 Here I take the score result By **get** keyword and convert it to nymber from five , in other words how many stars can you get from five if you had this score ?
 
 
 ```
  cy.get('[test-data="area_1_Scor"]', { timeout: 2000 })
  
  .invoke('text')
  
  .then(text => {
  
    const numerator = +text.split('/')[0].replace('(', '')
    
    const denominator = +text.split('/')[1].replace(')', '')
    
    const rate = numerator * 5 / denominator;
    
    const x = Math.round(rate)
    
    cy.log(x);
    
    ```
    
   cy.get('[ test-data="area_1_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });
  ```
  
  And At last compare the number with stars number  
  
  all test cases passes sucessfuly 
  
  ![image](https://user-images.githubusercontent.com/79005401/165776415-2553d65c-910a-43ae-b13e-8997b7585a1f.png)

  ### Demo for testing :
  

Uploading video2777778228.mp4…


