class GameObject{
    components = []
    hasStarted = false
    markForDestroy = false
    name 
    physicsStatic = false

    layer ="default"
    scene

    id
    static nextID = 0


    constructor(name,options={}){
        this.addComponent(new Transform())
        this.name = name 
        this.id = GameObject.nextID
        GameObject.nextID++
        Object.assign(this, options)

    
    }
    addComponent(component, options = {}){
        Object.assign(component, options)
        this.components.push(component)
        component.gameObject = this
        
        return component
    }

    //tell Children
    sendMessage(message, args=[]){
        if(!this.hasStarted){
            this.hasStarted = true
            this.broadcastMessage("start")
        }
        for(const component of this.components){
                component[message]?.(...args)
    }



    }

    //tell children and parents
    broadcastMessage(message, args=[]){
        if(!this.hasStarted){
            this.hasStarted = true
            this.broadcastMessage("start")
        }
        for(const component of this.components){
                component[message]?.(...args)
        }
        for (const child of SceneManager.getActiveScene().gameObjects.filter(go=>go.transform.parent == this)){
            child.broadcastMessage(message,args)

        }
    }   

    update(){
        
        this.sendMessage("update")
        }
    
       

    draw(ctx){
        // for(const component of this.components){
        //     component.draw?.(ctx)
        // }
        ctx.save()

        ctx.setTransform(ctx.getTransform().multiply(this.transform.getWorldMatrix()))
        this.broadcastMessage("draw", [ctx])
        ctx.restore()
    }
    destroy(){
        this.markForDestroy = true
        

    }
    getComponent(type){
        return this.components.find(c=> c instanceof type)
    }

    get transform(){
        return this.components[0]
    }

    static find(name){
        return SceneManager.getActiveScene().gameObjects.find(go => go.name == name)
    }

}