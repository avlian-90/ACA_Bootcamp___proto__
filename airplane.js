/* Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
If a plane takes off, its isFlying property is set to true.
If a plane lands, its isFlying property is set to false. */

const Airplane = {
  name: "Antonov",
  isFlying: null,
  takeOff() {
    Airplane.isFlying = true;
    console.log("Airplane is flying");
  },
  land() {
    Airplane.isFlying = false;
    console.log("Airplane lands");
  },
};
console.log(Airplane.takeOff());
console.log(Airplane.land());
