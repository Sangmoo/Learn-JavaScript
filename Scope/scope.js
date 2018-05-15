// let 과 const 로 선언한 변수와 상수는 만들기 전에는 존재하지 않는다.
// JS는 선언과 동시에 정의가 되므로(명시적으로 정의하지 않으면 undefined)
// 변수가 존재하지 않으면 그 변수는 스코프 안에 '있지 않음'을 알 수 있다.

const x = 3;

function f() {
    console.log(x);
    console.log(y); // 새로운 스코프에 y가 있어서 에러 발생
} 
{
    //새로운 스코프
    const y = 4;
    f();
}
// 자신이 정의될 때의 스코프가 중요




// 전역 스코프
// 전역 스코프에서 선언한 것은 무엇이든 프로그램의 모든 스코프에서 볼 수 있다

let name = "sangmoo"; // 전역
let age = 26; // 전역

function greet() {
    console.log(`Hello, ${name}!`);
}




// 블록 스코프


const x = 1;
console.log(x);   //1
{
    const x = 2;
    console.log(x);   //2
}
console.log(x);   //1
//  const 로 선언한 x 의 경우 재 할당이 불가능하지만 블록 스코프에서는 하고있다
// 계층적이라는 것을 알 수 있고 내부 스코프는 외부 스코프의 변수를 덮어쓸 수 있다는 것을 알 수 있다



// 변수 숨기기
{
    //outer
    let x = { color: "blue" };
    let y = x;                            //y와 x는 같은 객체를 가리킨다.
    let z = 3;
    {
        //inner
        let x = 5;                        //outer x는 가려졌다!!
        console.log(x);             //5
        console.log(y.color);   //"blue"; y가 가리키는, 외부 스코프 x가 가리키는 객체
        y.color = "red";
        console.log(z);             //3; z는 숨겨지지 않았다.
    }
    console.log(x.color);       //red   x객체는 내부 스코프에서 수정됨
    console.log(y.color);       //red
    console.log(z);                 //3
}

