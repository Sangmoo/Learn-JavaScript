// 배열에서 검색하고자 하는 녀석이 몇 번째 인덱스에 있는지 알려주는 메서드이다.
// 검색은 일치하는 것(===)을 찾는다.
// 또한 lastIndexOf는 뒤에서부터 찾아간다.

const o = { name: "1ilsang" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

arr.indexOf(5);                     // 1
arr.lastIndexOf(5);                 // 5
arr.indexOf({ name: "1ilsang" });   // -1
arr.indexOf(o);                     // 3
arr.indexOf([1, 2]);                // -1
arr.indexOf("9");                   // 7
arr.indexOf(9);                     // -1

arr.indexOf(5, 5);                  // 5
arr.lastIndexOf(true, 3);           // -1
arr.lastIndexOf(true, 4);           // 4
// (찾지 못한다면 -1을 반환)

// indexOf(5, 5)는 5를 5번째부터 찾는 것이고 (따라서 인덱스1에 있는 5가 아닌 인덱스5에 있는 5를 검색)
// lastIndexOf(true, 3)은 인덱스3까지 true 를 뒤에서부터 찾는다.
// 그러므로 인덱스3(1, 5, "a", o)까지 에 true가 없기 때문에 -1을 반환한다.
// 여기서 뒤에서부터 찾기는 하지만 반환하는 인덱스 값은 정상적인 순서로 나온다(앞에서부터 센 인덱스)
// 다시 한 번 설명하자면 lastIndexOf(true, 4)의 경우 인덱스 4까지 true를 찾는데 이 경우 true가 있으므로
// true의 인덱스 번호인 4가 출력되는 것이다.







// findIndex는 일치하는 것을 찾지 못할 경우 -1을 반환하는 것은 indexOf와 같지만,
// 보조 함수를 써서 검색 조건을 지정할 수 있으므로 indexOf보다 더 다양한 상황에서 활용할 수 있다.
// 하지만 검색을 시작할 인덱스를 지정할 수 없고 뒤에서 찾을 수도 없다.
const arr = [{ id : 5, name : "Judith" }, { id : 7, name : "Francis" }];
arr.findIndex(o => o.id === 5);   //0
arr.findIndex(o => o.name === "Francis"); //1




// find
// find와 findIndex에 전달하는 함수는 배열의 각 요소를 첫 번째 매개변수로 받고
// 현재 요소의 인덱스와 배열 자체도 매개변수로 받는다.
const arr = [{ id : 5, name : "Judith" }];
arr.find(o => o.id === 5);  //객체 {id:5, name:"Judith"} 를 반환