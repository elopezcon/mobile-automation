import CommonMethods from "../screen-objects/common-methods";

class Header extends CommonMethods {
    constructor() {
        super();
        this.$hamburgerMenu = () => $('~test-Menu');
        this.$shoppingCart = () => $('~test-Cart');
    };

    async tapOnShoppingCart () {
        await this.tapOnElement(this.$shoppingCart());
    };
};

export default new Header();