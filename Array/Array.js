// 배열 요소 조작시 받은 배열 그 자체를 조작하는지
// 아니면 조작된 배열을 반환하는지를 잘 알아야 한다.

// 예를들면 push, shift 등은 배열 자체를 수정하며 concat은 새 배열을 반환한다.

// shift, unshift
arr = [1, 2, 3];

// Queue와 비슷, 배열의 끝에 추가하거나 삭제한다.
arr.unshift("a"); // ["a", 1, 2, 3];
arr.shift();      // [1, 2, 3];





// Concat
const arr = [1, 2, 3];
arr.concat(4,5,6); // [1,2,3,4,5,6]
arr.concat([4,5,6]); // 위와동일
arr.concat([4,5],6); // 위와동일
arr.concat([4,[5,6]]); // [1,2,3,4,[5,6]]
// concat 은 배열 끝에 여러 요소를 추가한 사본을 반환한다.
// 배열을 넘길시 배열을 분해해 추가한다!!







// Slice
const arr = [1, 2, 3, 4, 5];
arr.slice(3); // [4, 5]
arr.slice(3, 4); // [4]
arr.slice(1, 3); // [2, 3]
arr.slice(-2, 0); // []
arr.slice(-2, -1); // [4]
// slice 메서드는 매개변수 두 개를 받는데 (시작, 끝) 이다. 시작부터 끝까지를 잘라내 보여주는 것.
// 얘도 concat과 같이 사본을 보여준다.
// 하나의 인자로 (시작) 만 적으면 시작 부터 출력하게 된다.
// 또한 음수를 적을 경우 뒤에서부터 세지만 한 바퀴를 돌 수는 없다. (-2, 0)에서 빈 배열이 반환되는 이유.







// Splice
const arr = [1, 5, 7];
arr.splice(1, 0, 2, 3, 4);  // []. arr은 이제 [1, 2, 3, 4, 5, 7]
arr.splice(5, 0, 6);        // []. arr은 이제 [1, 2, 3, 4, 5, 6, 7]
arr.splice(1, 2);           // [2, 3] arr 은 [1, 4, 5, 6, 7]
arr.splice(2, 1, 'a', 'b'); // [5]. arr은 이제 [1, 4, 'a', 'b', 6, 7] 
// splice는 배열을 자유롭게 수정할 수 있다.
// 첫 번째 매개변수는 수정을 시작할 인덱스이고
// 두 번째 매개변수는 제거할 요소 숫자이다.
// 아무 요소도 제거하지 않을 경우 0을 넘긴다.
// 이후의 매개변수는 배열에 추가될 요소이다.






// copyWithin
const arr = [1, 2, 3, 4];
arr.copyWithin(1, 2); // arr은 [1, 3, 4, 4]
arr.copyWithin(2, 0, 2); //   [1, 3, 1, 3]
arr.copyWithin(0, -3, -1); // [3, 1, 1, 3]

// copyWithin은 ES6에서 도입한 새 메서드이다.
// 이 메서드는 배열 요소를 복사해 다른 위치에 붙여넣고, 기존의 요소를 덮어쓴다.
// 첫 번째 매개변수는 복사한 요소를 붙여넣을 위치이고
// 두 번째 매개변수는 복사를 시작할 위치이고
// 세 번째 매개변수는 복사를 끝낼 위치이다.(생략 가능)
// slice와 마찬가지로 음수시 뒤에서부터 시작한다.








// fill
const arr = new Array(5).fill(1); //[1, 1, 1, 1, 1]
arr.fill("a");                    //["a", "a", "a", "a", "a"]
arr.fill("b", 1);                 //["a", "b", "b", "b", "b"]
arr.fill("c", 2, 4);              //["a", "b", "c", "c", "b"]
arr.fill(5.5, -4);                //["a", 5.5, 5.5, 5.5, 5.5]
arr.fill(0, -3, -1);              //["a", 5.5, 0, 0, 5.5]
// fill은 ES6에서 새로 도입된 메서드로 정해진 값으로 배열을 채운다. new 와 잘 어울림.
// arr 자체를 바꾼다.
// fill(바꿀값, 시작idx, 끝idx)