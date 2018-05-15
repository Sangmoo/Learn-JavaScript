//  bind는 함수의 동작을 영구적으로 바꾼다.

const bruce = { name: "sangmoo" };
const madeline = { name: "Madeline" };

function update(birthYear, occupation) {
    this.birthYear = birthYear;
    this.occupation = occupation;
}

console.log(bruce);
const updateBruce = update.bind(bruce);
updateBruce("1994", "code");
console.log(bruce);
updateBruce.call(madeline, 2018, "sangchul");
console.log(bruce);


// { name: 'sangmoo' }
// { name: 'sangmoo', birthYear: '1994', occupation: 'code' }
// { name: 'sangmoo', birthYear: 2018, occupation: 'sangchul' }

// updateBruce 라는 새로운 update 함수를 만든다.
// 여기서 중요한 점은 새 로 운 update 함 수 라는 사실



const updateBruce = update.bind(bruce);
updateBruce("1994", "code");
console.log(bruce);
updateBruce.call(madeline, 2018, "sangchul");
console.log(bruce);

const updateMadel = update.bind(madeline);
updateMadel("2222", "222");
console.log(madeline);



// 강제하는 새로운 함수
const updateMadel = update.bind(madeline, "2018");
updateMadel("student");
console.log(madeline);
