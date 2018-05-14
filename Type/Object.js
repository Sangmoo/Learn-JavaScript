
// 객체 컨테이너 본질은 변하지 않고 내용물은 변할 수 있다.
const obj1 = { a : "Sangmoo", b : "Github" }
const obj2 = {
  a : "Sangmoo",
  b : "Github"
}

const a = 1;
const b = 1;


// 객체에 접근

const obj3 = {
    classification : {
      a : 'hi',
      b : 'sangmoo'
    }
  }

// 4가지 방법으로 접근 가능
obj3.classification.b;
obj3["classification"].b;
obj3.classification["b"];
obj3["classification"]["b"];

// 함수도 담을 수 있다.
sam3.speak = function() { return "Hello!"; };
sam3.speak(); // "Hello!"

// delete로 지우면 객체 내용이 undefined 로 변하게 된다.