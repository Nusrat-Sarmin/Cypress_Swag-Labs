import LoginPage from "../pages/LoginPage";
import AddToCart from "../pages/AddToCart";
import ProductPage from "../pages/ProductPage";
describe("Adding product to the cart",()=>{
    const loginPage = new LoginPage();
    const addToCart = new AddToCart();
    const productPage = new ProductPage();
    before(()=>{
        loginPage.userLogin("standard_user","secret_sauce"); 
       })
    it("Add Product To Cart",()=>{
        loginPage.userLogin("standard_user","secret_sauce");
         addToCart.userInDashboard();
         addToCart.viewProduct();
         addToCart.addingToCart();
         addToCart.cartPage();
         addToCart.gooingToCheckoutPage();
         productPage.addUserInfo("Nusrat","Sarmin","444");
         productPage.clickCancel();
         addToCart.userInDashboard();
     })
    //  it("Verify Product Purchase is Cancelled",()=>{
    //     addToCart.userInDashboard();
    //     addToCart.viewProduct();
    //     addToCart.addingToCart();
    //     addToCart.cartPage();
    //     addToCart.gooingToCheckoutPage();
    //     productPage.addUserInfo("Nusrat","Sarmin","444");
    //     productPage.clickCancel();
    //     addToCart.userInDashboard();
    //  })
    })