class Time{
    static deltaTime = 1/60
    static time = 0//Time since game start
    static frameCount = 0// Frames since game started

    static update(){
        Time.time += Time.deltaTime
        Time.frameCount ++
    }
}