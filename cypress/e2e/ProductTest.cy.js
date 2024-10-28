import LoginPage from "../pages/LoginPage";
import AddToCart from "../pages/AddToCart";
import ProductPage from "../pages/ProductPage";
describe("Buy product",()=>{
    const loginPage = new LoginPage();
    const addToCart = new AddToCart();
    const productPage = new ProductPage();
    before(()=>{
        loginPage.userLogin("standard_user","secret_sauce"); 
       })
    it("Verify Product Purchase is successful",()=>{
        addToCart.userInDashboard();
        addToCart.viewProduct();
        addToCart.addingToCart();
        addToCart.cartPage();
        addToCart.gooingToCheckoutPage();
        productPage.addUserInfo("Nusrat","Sarmin","444");
        productPage.clickFinish();
        productPage.checkOutComplete("Thank you for your order!");

     })
     
})