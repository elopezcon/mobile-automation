import BaseScreen from "./base-screen";
class CatalogScreen extends BaseScreen {
    constructor(){
        super();
        this.$firstItemDragHandle = () => $('android=new UiSelector().descriptionContains("test-Drag Handle")');
        this.$dragZone = () => $('~test-Toggle');
    };

    async addFirstItemByDragging () {
        await this.dragAndDrop(this.$firstItemDragHandle(), this.$dragZone());
    };
};

export default new CatalogScreen();