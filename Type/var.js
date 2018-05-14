let currentTempC = 22; // 한번만 선언 가능
let val; // undefined

const ROOM_NUMBER = 1; // 더이상 변경할 수 없는 고정값

let Url = "https://github.com/Sangmoo/Learn-JavaScript"; // 식별자 = "리터럴"


let str = "https://github.com/Sangmoo";
str = "Url"; // 새로운 값 할당


// * Template * //

// 백틱( ` )을 통해 문자열 안에 값을 넣어줄 수 있다.
const message = `hello world! ${Sangmoo}`; // + 연산을 안해도 된다.

const message = "line1\n" +
  "line2\n" +
  "line3";  // + 연산


const result = 3 + '30'; // 330
const result2 = 3 * '30'; // 90
// + 연산의 경우 숫자가 문자로 변해 330이 되고
// * 연산의 경우 문자가 숫자로 변해 90이 출력된다.


