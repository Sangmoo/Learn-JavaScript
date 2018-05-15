const bruce = { name: "sangmoo" };
const madeline = { name: "Madeline" };

function greet() {
    return console.log(`Hello, I'm ${this.name}!`);
}

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}
console.log(bruce);
update.call(bruce, 1994, 'coder');
console.log(bruce);
update.apply(bruce, [2018, 'smilegate']);
console.log(bruce);

// { name: 'sangmoo' }
// { name: 'sangmoo', birthYear: 1994, occupation: 'coder' }
// { name: 'sangmoo', birthYear: 2018, occupation: 'smilegate' }

// 매개변수를 배열로 바로 넘겨줄 수 있으므로 편리합니다. 이 외에는 call과 동일하다는 것

