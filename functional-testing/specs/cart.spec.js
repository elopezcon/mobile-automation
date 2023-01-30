import loginScreen from "../screen-objects/login-screen";

describe('Cart feature', () => {
    it('Add item to cart by dragging it', async () => {
        await loginScreen.fillUserLogin();
    });
});