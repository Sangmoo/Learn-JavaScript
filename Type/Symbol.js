// ES6에서 도입한 새 데이터 타입으로 심볼은 항상 유일하다는 특징
// 객체와 유사

const White = Symbol("Sangmoo");
const Black = Symbol("Sangmoo");
RED === BLUE; // false : 심볼은 모두 서로 다르다!

// Symbol 은 new 를 쓰지 않는 예외적인 부분이다.