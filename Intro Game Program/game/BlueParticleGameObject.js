class BlueParticleGameObject extends GameObject {
    constructor() {
        super("Blue Particle System")

        this.addComponent(new ParticleSystem(), {
            startParticles: new UniformDistribution(10, 20),      // fewer on start
            particleVelocity: new UniformDistribution(5, 10),
            particleLifetime: new UniformDistribution(10,20), // short lived
            particleSize: new UniformDistribution(1,2),
            particleColor: new UniformColorDistribution(0, 0, 0, 0, 0, 255),
            particleDirection: new UniformDistribution((Math.PI), Math.PI * 2),
            particleGravity: new ConstantDistribution(-5),
            maintainParticleCount: false,
            continiousParticleSpawning: true,
            continiousSpawnInterval: new UniformDistribution(0.3, .4),
            continiousSpawnParticleCount: new ConstantDistribution(100), // ← was 100, now 10
            
        })
    }
}