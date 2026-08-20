
class ConstantDistribution{
    constructor(value){
        this.value =value
    }
    sample(){
        return this.value
    }

}
class UniformDistribution{
    constructor(low,high){
        this.low = low
        this.high = high
    }
    sample(){
        return this.low +Math.random() * (this.high-this.low)
    }

}

class ConstantColorDistribution{
    constructor(r,g,b){
        this.r = r
        this.g = g
        this.b = b
    }

    sample(){
        return{r: this.r,
               g: this.g, 
               b: this.b,
        }
    }
}

class UniformColorDistribution{
    constructor(r1,g1,b1,r2,g2,b2){
        this.r1 = r1
        this.r2 = r2
        this.g1 = g1
        this.g2 = g2
        this.b1 = b1
        this.b2 = b2
    }
    sample(){
        const rand = Math.random()
        return{
            r: (1-rand)*this.r1 + rand * this.r2,
            g: (1-rand)*this.g1 + rand * this.g2,
            b: (1-rand)*this.b1 + rand * this.b2,
        }
    }
}



class Particle{
    position = new Vector2(0,0)
    velocity = 1
    direction = Math.random() * Math.PI * 2
    size = 10
    lifeTime = 1
    color = {r:255,g:255,b:255}
    gravity = 0
    

    isDead = false
    constructor(params){
        Object.assign(this, params)

        this.startTime = Time.time

        this.vx = this.velocity *Math.cos(this.direction)
        this.vy = this.velocity *Math.sin(this.direction)
    }

    update(){
        this.vy += this.gravity* Time.deltaTime
        this.position.x += this.vx
        this.position.y += this.vy

        if(this.startTime+this.lifeTime < Time.time){
            this.isDead = true
        }
    }
}

class ParticleSystem extends Component{
    loop = false
    particles = []
    startParticles = new ConstantDistribution(2)
    particleVelocity = new ConstantDistribution(1)
    particleLifetime = new ConstantDistribution(1)
    particleSize = new ConstantDistribution(1)
    particleColor = new ConstantColorDistribution(255,255,255)
    particleDirection = new UniformDistribution(0,Math.PI*2)
    particleGravity = new ConstantDistribution(0)

    maintainParticleCount = false

    continiousParticleSpawning = false

    continiousSpawnInterval = new ConstantDistribution(1)
    continiousSpawnParticleCount = new ConstantDistribution(0)

    spawnTimer = 0

    start(){
        this.startParticleCount = this.startParticles.sample()

        this.drawParticle(this.startParticleCount)

        this.currentInterval = this.continiousSpawnInterval.sample()
    }
    update(){
        this.spawnTimer += Time.deltaTime



        for(const particle of this.particles){
            particle.update()
        }

        this.particles = this.particles.filter(p=>!p.isDead)

     

        let particleCountDifference = this.startParticleCount - this.particles.length

        if (this.maintainParticleCount && particleCountDifference > 0){
            this.drawParticle(particleCountDifference)
        }

        if(this.continiousParticleSpawning && this.spawnTimer > this.currentInterval && this.currentInterval >= 0){
            this.drawParticle(this.continiousSpawnParticleCount.sample())

            this.spawnTimer = 0
            this.currentInterval = this.continiousSpawnInterval.sample()
        }

        
    }
    draw(ctx){
        for(const particle of this.particles){
           ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g},${particle.color.b}, 1)`

            ctx.beginPath()
            ctx.arc(particle.position.x + this.transform.position.x, 
                particle.position.y + this.transform.position.y, 
                particle.size, 0, 2*Math.PI)
                ctx.fill()
        }
    }

    drawParticle(particleAmount){
        for(let i=0; i<particleAmount; i++){
            this.particles.push(
                new Particle({
                    velocity: this.particleVelocity.sample(),
                    size: this.particleSize.sample(),
                    lifeTime: this.particleLifetime.sample(),
                    color: this.particleColor.sample(),
                    direction: this.particleDirection.sample(),
                    gravity: this.particleGravity.sample()
                     





                })

            )

        }
    }

}