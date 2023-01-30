import CommonMethods from "../screen-objects/common-methods";

class Header extends CommonMethods {
    constructor() {
        super();
        this.$hamburgerMenu = () => $('~test-Menu');
        this.$shoppingCart = () => $('~test-Cart');
        this.$shoppincartNumer = () => $('android=new UiSelector().description("test-Cart").childSelector(new UiSelector().className("android.widget.TextView"))');
    };

    async tapOnShoppingCart () {
        await this.tapOnElement(this.$shoppingCart());
    };
};

export default new Header();