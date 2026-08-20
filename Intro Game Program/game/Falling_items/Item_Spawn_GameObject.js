class Item_Spawn_GameObject extends GameObject{
    constructor(Item_list, mod_speed){
        super("Item Spawn Game Object",{layer:"background"})
        this.addComponent(new Item_Spawn_Component(),{LevelItems:Item_list, mod_speed:mod_speed})
       
        
        


    }


}
