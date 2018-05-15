

getGreeting(); // "Hello World!"
getGreeting;   // function getGreeting()
// 괄호를 사용하면 JS는 함수를 호출하려 한다고 이해하고, 함수의 바디를 실행한다. (return)
// 하지만 괄호를 쓰지 않으면 다른 값과 마찬가지로 함수를 참조하고, 그 함수는 실행되지 않는다. (참조!!)




const f = getGreeting();
f();   // "Hello World!"

const o = {};
o.f = getGreeting;
o.f();  // "Hello World!"

const arr = [1, 2, 3];
arr[1] = getGreeting;   // arr = [1, function getGreeting(), 2];
arr[1]();  // "Hello World!"

// arr[1](); 보면 호출을 명확하게 알 수 있는데
// 괄호를 통해 JS는 그 값을 함수로 간주하고 호출하고 있다.



// 함수와 매개변수
function f(o) {
    o.message = "f에서 수정함";
    o = {
        message: "새로운 객체"
    };
    console.log(`f 내부 : o.meesage = "${o.message}"(할당 후)`);
}
let o = {
    message: '초기 값'
};

console.log(`f를 호출하기 전 :  o.message="${o.message}"`);
f(o);
console.log(`f를 호출한 다음 : o.message="${o.message}"`);


// 함수 내부에서 새로운 객체를 만들어 할당했지만(원시 값)
// 이전에 참조로 들어온 값을 변화한 "f에서 수정함"이라는 문자열이 찍힌다. (참조 값)


