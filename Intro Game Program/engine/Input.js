class Input{
    static keysDown = []
    static KeysDownThisFrame = []
    static KeysUpThisFrame= []

    static mousePosition
    static mousePositionLastFrame
    static mousePositionDelta

    static mouseButtonsDownThisFrame =[]
    static mouseButtonsUpThisFrame =[]
    static mouseButtonsDown =[]


    static keyDown(event){
        if (!Input.keysDown.includes(event.code)){
        Input.keysDown.push(event.code)
        Input.KeysDownThisFrame.push(event.code)
        }
    }

    static keyUp(event){
        Input.keysDown = Input.keysDown.filter(key => key != event.code)
        Input.KeysUpThisFrame.push(event.code)
    }
    static mouseDown(event){
        Input.mouseButtonsDown.push(event.button)
        Input.mouseButtonsDownThisFrame.push(event.button)
    }

    static mouseUp(event){
        Input.mouseButtonsDown = Input.mouseButtonsDown.filter(button => button != event.code)
        Input.mouseButtonsUpThisFrame.push(event.button)
    }

    static mouseMove(event){
        Input.mousePosition = new Vector2(event.clientX,event.clientY)
    }
    static update(){
        Input.KeysDownThisFrame =[]
        Input.KeysUpThisFrame = []
        Input.mouseButtonsDownThisFrame =[]
        Input.mouseButtonsUpThisFrame =[]

        if (Input.mousePosition&& Input.mousePositionLastFrame){
            Input.mousePositionDelta = Input.mousePosition.minus(Input.mousePositionLastFrame)
        
        if(Input.mousePosition)
            Input.mousePositionLastFrame = Input.mousePosition.clone()
        
        }
    }

}
