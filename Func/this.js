const o = {
    name: 'sangmoo',
    speak() {
        return console.log(`My name is ${this.name}`);
    }
};
o.speak();
const speak = o.speak;
console.log(speak === o.speak);
speak();

