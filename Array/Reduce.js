// map이 배열의 각 요소를 변형한다면 reduce는 배열 자체를 변형한다.
// reduce라는 이름이 붙은 이유는 이 메서드가 보통 배열을 값 하나로 줄이는 데 사용되기 때문이다.

// map과 filter는 첫 번째 매개변수가 배열 요소였지만, reduce의 경우
// 첫 번째 매개변수는 배열이 줄어드는 대상인 어큐뮬레이터(accumulator)이다.
// 두 번째 매개변수부터는 콜백의 순서대로 현재 배열 요소, 현재 인덱스, 배열 자체이다.


const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x, 0); // sum = 0 + 5 + 7 + 2 + 4
// 만약 초기값을 알려주지 않는다면 배열의 첫 번째 요소가 초기 값이 된다.


const arr = [5, 7, 2, 4];
const sum = arr.reduce((a, x) => a += x); // sum = 5 + 7 + 2 + 4
// reduce가 단순히 하나로 값을 누적해 가는 거라고 생각할 수 있지만
// 더 중요한 점은 객체를 누적할 수 있다는 점이다.


const words = [ "sangmoo", "blog", "me"];
const alphabetical = words.reduce((a, x) => {
    if (!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});
console.log(alphabetical); // { '1': [ 'sangmoo' ], b: [ 'blog' ], m: [ 'me' ] }



// 순서를 조금 나열하자면 첫 번째 x는 sangmoo 이 된다.
// x = sangmoo 에서 x[0] 은 1이 되므로

// 첫 번째 이프문은 if(a.1) 이 되고 a.1은 없으므로 빈 배열을 하나 생성한다.
a = {
    1 : []
}

// 그 다음 a[1].push('sangmoo'); 을 통해 a객체의 1프로퍼티에 값을 넣어주게 된다.
a = {
    1 : ['sangmoo']
   }

// 그 다음 x에는 blog 가 되므로 위의 동작을 한 번 더 하게 된다.
// a.b 가 없으므로 빈 배열을 만들어 주고 blog 를 넣어주게 되는 것.
a = {
    1 : ['sangmoo'],
    b : ['blog']
   }



const words = ["sangmoo", "blog", "me", "sangchul", "catholic", "cuk"];
const longWords = words.reduce((a, w) => w.length > 4 ?
    a + " " + w : a, "").trim();
console.log(longWords); // 1ilsang sangchul catholic
// 4보다 긴 문자열들만 뽑아서 하나의 string 으로 출력해 주는 모습.
// trim() 을 사용한 이유는 최초 누적 a 가 ""라 빈칸이 생기기 때문이다.
   
