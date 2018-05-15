// 여기서 sort 의 경우 정렬 함수를 받을 수 있다.
const arr = [1, 2, 3];
arr.reverse();   // arr은 이제 [3, 2, 1]
arr.sort();      // arr은 이제 [1, 2, 3]



const arr = [
    { name: "Suzanne" },
    { name: "Jim" },
    { name: "Sangchul" },
    { name: "sangmoo" },
];
arr.sort();
console.log(arr); // 그대로
arr.sort((a, b) =>
    a.name > b.name
);  // name 프로퍼티의 알파벳 순으로 정렬
console.log(arr);
arr.sort((a, b) => a.name[1] < b.name[1]);  // name프로퍼티의 두 번째 글자의 알파벳 역순 정렬
console.log(arr);
