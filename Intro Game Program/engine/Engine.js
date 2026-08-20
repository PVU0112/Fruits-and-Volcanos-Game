class Engine {
    static currentScene

    static canvas 
    static ctx 
    
    static lastTimestamp

    static layers = ["default","UI"]

    static collisionLayers = []

    static aspectRatio

    static letterBoxWidth = 0

    static letterBoxHeight = 0

    static cameraWidth = 2000

    static start(options) {
        //check if we have options then check if options have layers
        if(options){
            if(options.layers){
                Engine.layers.push(...options.layers)

            }
            if(options.collisionLayers){
                Engine.collisionLayers.push(...options.collisionLayers)
            }
            Engine.aspectRatio = options.aspectRatio
            Engine.cameraWidth = options.cameraWidth ?? 2000
        }

        Engine.canvas = document.querySelector("#canv")
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keyDown)
        addEventListener("keyup", Input.keyUp)
        addEventListener("mousemove", Input.mouseMove)
        addEventListener("mousedown", Input.mouseDown)
        addEventListener("mouseup", Input.mouseUp)

        addEventListener("contextmenu", e => e.preventDefault())
        

        Engine.gameLoop(undefined)
    }
    /**
     * 
     * @param {Number} time
     */
    static gameLoop(time){
        ////console.log(time)
        if(Engine.lastTimestamp){
            const diff = time - Engine.lastTimestamp
            const diffInSeconds = diff / 1000
            Time.deltaTime = Math.min(1/60, diffInSeconds)
            Engine.lastTimestamp = time
        }
        else{
            Engine.lastTimestamp = time
        }
        Engine.update()
        Engine.draw()

        Input.update()
        Time.update()
        SceneManager.update()
        
        
        
        requestAnimationFrame(Engine.gameLoop)
    }
   

    static update(){
        SceneManager.getActiveScene().update()
        
    }

    static draw(){
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        SceneManager.getActiveScene().draw(Engine.ctx)
    }
}