# QA-AutomationTesting

## TestCases Details: https://docs.google.com/spreadsheets/d/15DDsoqaaGOU85vk9JUOCpwLf1xOZHew9kB5buK3GcnA/edit?usp=sharing




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
    
    
   cy.get('[ test-data="area_1_myscore"]').find('[test-data="filledStar"]').should('have.length', x)
  });
  ```
  
  And At last compare the number with stars number  
  
  all test cases passes sucessfuly 
  
  ![image](https://user-images.githubusercontent.com/79005401/165776415-2553d65c-910a-43ae-b13e-8997b7585a1f.png)

  ### Demo for testing :
  
https://youtu.be/J4X5zAr995w




https://user-images.githubusercontent.com/79005401/165784946-45063cfe-e8da-44b6-96ac-a8c9210dce58.mp4



# Search Page(Part 1)_Shada Bana

Visit search page
```
describe('searchPage', () => {
  beforeEach(() => {

    cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
  })
```
## First test case _ search and match the total match in couse page
Login to the system using valid information
```
 it('search and total match', () => {
    cy.get("input[name=username]")
    .type('shada-bana');
    cy.get("input[name=password]")
    .type('12345')
    .type("{enter}");
 ```
 then enter to search page
 Then atart serch with word `java`
 ```
   cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('java');
```
Click search and the result shown
Then go to the course page and we check if the match number og the word = the number in thw course only in description.

Take the number of matched word by split the text `Total Matches : 43` and take only the numer `43`
```
 cy.get("#search-result > div:nth-child(1) > span.badge.badge-primary")
      .invoke('text')
      .then(text=>{
        const matchednumber = +text.split(':')[1]
        cy.log(matchednumber);
      })
```
Visit the course page

` cy.visit('https://skillsmatch.mdx.ac.uk/en/course/5780?keywords=java');`

then get the description in couse page and match the words with the matched number
in the description there `p html element` and `li html element` --> so first take the `p html element` and split the tect into words and match if this word = the word in search
```
 cy.get('body > div:nth-child(2) > div.container > div:nth-child(9)')
  .each($p => {
    let wordFilter=0;
    $p.text().split(' ').forEach(word=>{
      if(word =='Java'||word =='java')
       wordFilter++
    })

```
then the same in `li html element` 
```
 cy.get('body > div:nth-child(2) > div.container > div:nth-child(9)')
    .each($li => {
      $li.text().split(' ').forEach(wordd=>{
        if(wordd =='Java'||wordd =='java')
         wordFilter++;  
  })
 ```
 and here take the number og matvhed word ad compare it with the word in the course
 ```
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
    
     expect(wordFilter).to.equal(matched)
```
## Second test case_search with all key word
Login to the system using valid information
```
 it('search and total match', () => {
    cy.get("input[name=username]")
    .type('shada-bana');
    cy.get("input[name=password]")
    .type('12345')
    .type("{enter}");
 ```
 then enter to search page
  Then start serch with word `java`
 ```
   cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('java');
```
click to search button 
```
 const button=cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button");
    button.click();
```
Search with the second word `software` and click search
```
   cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span")
    .type('Software');

    button.click();
```
Click search and the result shown
Then click advanced option and choose match all
```
 cy.get('#searchFrom > div:nth-child(3) > div.col-7 > div > div.card-header > a')
    .click();
    cy.get('#match_all')
    .click();
    cy.get("#searchFrom > div:nth-child(2) > div.input-group-append.col-2 > button").click();
```
Then we should get the word that we are search with --> `java` and `software`
so we go to search bar and get the words by
here we get the first word `java`
```
 cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(1)")
     .invoke('text')
     .then(text=>{
       var search1=text
       cy.log(search1);

     })
```
then get the second word `software`
```
  cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > tag:nth-child(2)")
     .invoke('text')
     .then(text=>{
      var search2=text
      cy.log(search2);

    }) 
```
finally compare for each word if we have the 2 key word (for each course)
```
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
```
## all test cases passes sucessfuly 
![image](https://user-images.githubusercontent.com/79002035/166134900-18507b78-67cc-45e6-a969-e2889dd3dcf7.png)

## Demo for testing



https://user-images.githubusercontent.com/79002035/166135413-8d563857-c12f-4431-a7e1-45fe6d4062a5.mp4


# Search page process(part 2) - Israa Amour
# The 4 test case / translate keyword senario :
* Visit skills match website :
```
 beforeEach(() => {

        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
      })
```
* Log into account :
```
  cy.get("input[name=username]").type("00");
        cy.get("input[name=password]").type("00").type("{enter}");
```
* Insert into keyword component a specific word in arabic (برمجة ):
 ```
        cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span").type("برمجة");
 ```
* Display Advanced Optiens card:
```
        cy.get(".card-link").click({ force: true });

```
* Select fron translating to English :
```
        cy.get("#translateInput").select("en");
 ```
 * Click into search button :
 ```
         cy.get("[test-data=searchButton]").click({ force: true });
 ```
 * Search Results are displayed :
  ```

         cy.get("#search-result").click({ force: true });
  ```
* Check if the word matches what translation and results are shown:
 ```
    cy.get('[test-data=MatchedKeywords]').each((item) => {
            cy.wrap(item).should('contain.text', 'programming')
        })
 ```
 # Test case passed :
![testcase1](https://user-images.githubusercontent.com/79007080/166128581-2e8af30e-2db5-4353-b79c-cc6d2a5c4220.png)
## Search page process/testcase-5- Israa Amour
# Search based on user reviews 
* VIsit my website - skills match 
   beforeEach(() => {

        cy.visit('https://skillsmatch.mdx.ac.uk/en/search/')
    })
* log into my account :

      cy.get("input[name=username]").type("00");
      cy.get("input[name=password]").type("00").type("{enter}");
      
* Insert a keyword in English that is valid - python:

        cy.get("#searchFrom > div:nth-child(2) > div.col-7 > tags > span").type("python");
* Click into advanced optiens then the 4th optien which is / user reviews 

        cy.get(".card-link").click({ force: true });
        cy.get("[test-data=sort_by_user_reviews]").click({ force: true });
* Click on search button :

        cy.get("[test-data=searchButton]").click({ force: true });
        
* Display search results :

        cy.get("#search-result").click({ force: true });
* Check if the starts/ user reviews of the secend result is less or eq to the first result :

        cy.get(['#search-result > div:nth-child(2) > div.ratingme.smallRate'])
        .its('length')
        .then((size)=>{
            cy.get(['#search-result > div:nth-child(1) > div.ratingme.smallRate'])
            .its('length')
            .should('be.gte',size)
        })
* Process passed:

![userreives](https://user-images.githubusercontent.com/79007080/166143299-de325278-569a-4dae-8098-b07157ea41ef.png)



## For search page2 demo:
https://user-images.githubusercontent.com/79007080/166143664-1ae2c16d-1344-4bb8-8259-38d2bd495889.mp4





 









 

  



