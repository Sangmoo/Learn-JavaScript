// 자바스크립트의 숫자는 모두 더블 형식이다.

const s = "5";
const y = 3 + +s; // y는 8이된다. + 단항 연산자 덕분
// 숫자형 리터럴 앞에 있는 +- 기호는 실제 숫자형 리터럴의 일부로 해석되어 연산자가 아니다.



let x = 2;
const r1 = x++ + x++;
//       ((x++) + (x++))
//       (2 + (x++)) 왼쪽에서 오른쪽으로 진행. x 는 3이 된다. (2에서 후위연산)
//       (2 + 3)     이로써 x 는 4가 된다.
//       r1 = 5;

const r2 = ++x + ++x;
//       ((++x) + (++x))
//       (5 + (++x))  x는 지금 5다.
//       (5 + 6)      x는 6이 된다. 최종적으로 x는 6인 상태.
//       r2 = 11;     전위는 그래도 쉬운 덧

const r3 = x++ + ++x;
//       ((x++) + (++x))
//       (6 + (++x))     x는 7이 된다. (6에서 후위)
//       (6 + 8)         x는 8이 된다. (전위 이므로 8이 바로 들어감)
//       r3 = 14;




// 3 + 5 + "8"  = 88 // "8" -> String
// "3" + 5 + 8  = "358" // String 3 + 58로 인식


// Ture & False

undefined
null
false
0
NaN
' '("빈 문자열")
// JS는 위의 6가지를 제외하면 모두 참이다.



// , operator
let x = 0, y = 20, z;
z =  (x++, y++);
// 값으로 필요한 것은 마지막 표현식의 결과 뿐일 때(z는 2번째 값)
// z는 20이되고 x,y는 1씩 증가된다.




// 해체 할당
// 객체나 배열을 변수로 해체할 수 있다

//객체 선언
const obj = { b: 2, c: 3, d: 4 };
//해체 할당
const { a, b, c, } = obj;
console.log(a);
console.log(b);
console.log(c);
// a는 undefined 가 되고 b와 c 에는 2와 3이 할당되었다.
// 객체를 해체할 때는 반드시 변수 이름과 객체의 프로퍼티 이름이 일치해야 한다.
// 프로퍼티 이름이 유효한 식별자인 프로퍼티만 해체 후 할당된다.


// 바로 선언하지 않고 쓸 경우
const obj = { b: 2, c: 3, d: 4 };
let a, b, c;

({a, b, c} = obj); // 괄호 구분을 해야 한다.


// Array Operator

const arr = [1, 2, 3, 4, 5, 6];

let [x, y, ...rest] = arr;
x;   // 1
y;   // 2
rest;// [3,4,5,6]

// 나머지 값들을 배열로 또 받을 수 있다.



// 단축
if(!options) options = {};
// 위의 코드와 아래의 코드는 동일하다.
options = options || {};
