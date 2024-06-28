interface Bird {
  eat(): void;
}

interface FlyingBird {
  fly(): void;
}
interface RunningBird {
  run(): void;
}

class Tucan implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements Bird, FlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements Bird, RunningBird {
  public eat() {}
  public run() {}
}
