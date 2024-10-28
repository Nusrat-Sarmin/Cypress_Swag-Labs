import LoginPage from "../pages/LoginPage";
describe("Testing Login Funtionality",()=>{
    const loginPage = new LoginPage();
    beforeEach(()=>{
     cy.viewport(1920,1000);
    })
   it("Testing with valid credential",()=>{
      loginPage.userLogin("standard_user","secret_sauce");  
   })

   it("Testing with invalid credential",()=>{
    loginPage.userLogin("standarduser","secret_sauce");
    loginPage.invalidAssertion();
})
})