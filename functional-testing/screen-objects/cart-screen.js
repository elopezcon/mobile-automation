import BaseScreen from "./base-screen";

class CartScreen extends BaseScreen {
    constructor(){
        super();
        this.$$cartItems = () => $('~test-Item');
        this.$itemQuantity = () => $('android=new UiSelector().description("test-Amount").childSelector(new UiSelector().className("android.widget.TextView"))');
        this.$itemPrice = () => $('android=new UiSelector().description("test-Price").childSelector(new UiSelector().className("android.widget.TextView"))');
    };
};

export default new CartScreen();