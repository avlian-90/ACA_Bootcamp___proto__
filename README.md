> ## ***__proto __***

**During this homework:**

**I have read the given materials, which are the following:**

- [*Inharitance and Prototype Chain*](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [*Prototype Methods*](https://javascript.info/prototype-methods)
- [*Native Prototypes*](https://javascript.info/native-prototypes)

**And done the required tasks, which are the following:**

1. What will the output be?

```javascript
const Human = {
  isHuman: true,
  hasBrain: () => (Math.random() > 0.9 ? true : false),
  breath: () => {
    if (Math.random() > 0.8) {
      console.log("breath");
    } else {
      console.log("😴 ");
    }
  },
};
const User = {
  __proto__: Human,
  name: "John",
  surname: "Doe",
  getFullName: () => `${User.name} ${User.surname}`,
};
const Programmer = {
  __proto__: User,
  code: () => {
    if (Math.random() > 0.2) {
      console.log("shit code");
    } else {
      console.log("code that still smells");
    }
  },
};
Programmer.breath(); // => OUTPUT:
```
[**Solution**](./whatWillOutputBe.js)<br><br>

2. Write an Airplane object that initializes name.
Give airplanes the ability to .takeOff() and .land():
- If a plane takes off, its isFlying property is set to true.
- If a plane lands, its isFlying property is set to false.<br>

[**Solution**](./airplane.js)