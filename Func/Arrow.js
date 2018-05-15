
// 화살표 함수는 항상 익명

// 1. function 생략
// 2. 함수의 매개변수가 단 하나 뿐이라면 (())괄호도 생략
// 3. 함수 바디가 표현식 하나라면 중괄호와 return도 생략.


const f1 = function() { return "sangmoo" };
const f2 = () => "sangmoo";

const a1 = function(name) { return `Hello, ${name}`; };
const a2 = (name) => `Hello, ${name}`;



// 화살표 함수는 일반 함수와 차이가 있다.
// 1. this가 다른 변수와 마찬가지로 정적으로 묶인다.
// 2. 객체 생성자로 사용할 수 없다.
// 3. arguments 변수를 사용할 수 없다. (확장 연산자를 사용하시오)

const o = {
    name: 'sangmoo',
    greeting() {
        function getReverseName() {
            let nameBackwards = '';
            for (let i = this.name.length - 1; i >= 0; i--) { // this.name이 가리키는 값이 o.name이 아니다                
                nameBackwards += this.name[i];
            }
            return nameBackwards;
        }
        return `${getReverseName()} si eman ym ,olleH`;
    }
};
console.log(o.greeting());

