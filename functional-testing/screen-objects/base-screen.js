import CommonMethods from "./common-methods";
import Header from "../components/header";

export default class BaseScreen extends CommonMethods {
    constructor(){
        super();
        this.header = Header;
    };
};
