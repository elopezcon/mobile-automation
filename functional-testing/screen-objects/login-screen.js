import CommonMethods from "./common-methods";

class LoginScreen extends CommonMethods {
    constructor(){
        super();
        this.$loginButton = () => $('~test-LOGIN');
        this.$validUserOption = () => $('~test-standard_user');
    };

    async fillUserLogin () {
        await this.tapOnElement(this.$validUserOption());
        await this.tapOnElement(this.$loginButton());
    };
};

export default new LoginScreen();