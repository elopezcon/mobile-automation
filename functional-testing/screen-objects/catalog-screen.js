class CatalogScreen extends BaseScreen {
    constructor(){
        super();
        this.$$dragHandles = () => $$('android=new UiSelector().descriptionContains("test-Drag Handle")');
        this.$firstItemDragHandle = () => this.$$dragHandles()[0];
        this.$dragZone = () => $('~test-Cart drop zone');
    };

    async addItemToCartByDragging () {
        await this.dragAndDrop(this.$firstItemDragHandle(), this.$dragZone());
    };
};