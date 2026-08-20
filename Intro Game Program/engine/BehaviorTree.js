class BehaviorTree{
    static SUCCEEDED = 0
    static FAILING = 1
    static RUNNING = 2
}


class Sequence{
    constructor(children){
        this.children = children
        this.index = 0
    }
    update(gameObject){
        const result = this.children[this.index].update(gameObject)
        if (result== BehaviorTree.SUCCEEDED){
            this.children[this.index].reset()
            this.index = (this.index+1) % this.children.length
        }

    }
    reset(){
        this.children[this.index].reset()
        this.index = 0

    }
}
class Wait{
    constructor(interval){
        this.interval = interval
    
    
    }
    update(gameObject){
        if(!this.endTime){
            this.endTime = Time.time + this.interval
        }
        if(Time.time > this.endTime){
            return BehaviorTree.SUCCEEDED
        }
        else{
            return BehaviorTree.RUNNING
        }
    }
    reset(){
        delete this.endTime
    }

    //Common Nodes

}

class Parallel{
    constructor(children){
        this.children = children
    }
    update(GameObject){
        for(const child of this.children){
            child.update(GameObject)
        }
        return BehaviorTree.RUNNING
    }
    reset(){
        
    }
}




//behavior  = new Sequence([new Fire(), new Wait(3)])
//behavior2 = new Sequence([new Fi(), new Wait(3)])
//class Fire{
    //update(gameObject)
    //this.behavior.update(this.gameObject)
    //this.behavior2.update(this.gameObject)



    //instantiate gameObject,transfrom.position.clone()
    //return BehaviorTree.SUCCEEDED
    //update(){
    // const result = this.wait.update(this.gameObject)
    // if(result == BehaviorTree.SUCCEEDED){
    //     this.wait.reset()
    //      this.fire.update()
    // }
    // }
//}