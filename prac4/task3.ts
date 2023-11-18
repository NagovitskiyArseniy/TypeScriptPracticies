interface CanSwim {
    swim(): void;
}

interface CanRun {
    run(): void;
}

interface CanFly {
    fly(): void;
}

abstract class Personn implements CanSwim, CanRun {
    abstract swim();
    abstract run();
    abstract fly();
}

abstract class NibiruHuman implements CanRun {
    abstract run();
}

abstract class Human implements CanSwim, CanRun {
    abstract swim();
    abstract run();
}

abstract class Cryptonian implements CanFly {
    abstract fly();
}
