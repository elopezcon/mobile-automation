import loginScreen from "../screen-objects/login-screen";
import catalogScreen from "../screen-objects/catalog-screen";
import cartScreen from "../screen-objects/cart-screen";

describe('Cart feature', () => {

    beforeEach(async () =>{
        await driver.reset();
    });

    it('Add item to cart by dragging it', async () => {
        const itemsQuantity = "1";

        await loginScreen.fillUserLogin();
        await catalogScreen.addFirstItemByDragging();

        await expect(catalogScreen.header.$shoppincartNumer()).toBeDisplayed();
        await expect(catalogScreen.header.$shoppincartNumer()).toHaveTextContaining(itemsQuantity);

    });

    it('Add item to cart and verify availability on cart screen', async () => {
        const itemsQuantity = "1";
        const itemPrice = "29.99";

        await loginScreen.fillUserLogin();
        await catalogScreen.addFirstItemByDragging(); 
        await catalogScreen.header.tapOnShoppingCart();

        await expect(cartScreen.$itemQuantity()).toHaveTextContaining(itemsQuantity);
        await expect(cartScreen.$itemPrice()).toHaveTextContaining(itemPrice);

    });
});