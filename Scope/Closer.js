let f; //정의되지 않았다.
{
    let o = { note: 'Safe' };
    f = function() {
        return o;
    };
}
let oRef = f();
console.log(oRef);
oRef.note = "Not so safe after all!";
console.log(oRef);


// { note: 'Safe' }
// { note: 'Not so safe after all!' }

// o.note 에 접근할 수 있다는 것이다.
// 이것이 바로 클로저이다




// 즉시 호출하는 함수 표현식이 IIFE

(function() {
    // IIFE body
})();
// 함수 표현식으로 익명 함수를 만들고 그 함수를 즉시 호출한다.
// IIFE의 장점은 내부에 있는 것들이 모두 자신만의 스코프를 가지지만,
// IIFE 자체는 함수이므로 그 스코프 밖으로 무언가를 내보낼 수 있다는 점이다.


const f = (function() {
    let count = 0;
    return function() {
        return `I have been called ${++count} time(s).`;
    };
})();

f(); // 1
f(); // 2
f(); // 3
