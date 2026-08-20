class VolcanoParticleSystemGameObject extends GameObject {
    constructor() {
        super("Particle System")

        this.addComponent(new ParticleSystem(), {
            startParticles: new UniformDistribution(10, 20),      // fewer on start
            particleVelocity: new UniformDistribution(1, 2),
            particleLifetime: new UniformDistribution(.5,1.25), // short lived
            particleSize: new UniformDistribution(5,10),
            particleColor: new UniformColorDistribution(0, 0, 0, 255, 0, 0),
            particleDirection: new UniformDistribution((Math.PI), Math.PI * 2),
            particleGravity: new ConstantDistribution(-1),
            maintainParticleCount: false,
            continiousParticleSpawning: true,
            continiousSpawnInterval: new UniformDistribution(0.5, 1),
            continiousSpawnParticleCount: new ConstantDistribution(20), // ← was 100, now 10
            
        })
    }
}