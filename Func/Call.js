const bruce = { name: "sangmoo" };
const madeline = { name: "Madeline" };

function greet() {
    return console.log(`Hello, I'm ${this.name}!`);
}

greet(); // undefined
greet.call(bruce); // sangmoo
greet.call(madeline); // MadeLine



const bruce = { name: "sangmoo" };

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

console.log(bruce); // name: "sangmoo"
update.call(bruce, 1993, 'coder');
console.log(bruce); // name: 'sangmoo', birthYear: 1993, occupation: 'coder'
