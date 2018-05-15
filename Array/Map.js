// 사본을 반환하며 원본은 변경되지 않는다.
// map은 배열 요소를 변형한다. (무엇이든)
// 일정한 형식의 배열을 다른 형식으로 바꿔야 한다면 map을 사용하면 된다.

const cart = [{ name: "Widget", price: 9.95 }, { name: "Gadget", price: 22.95 }];
const names = cart.map(x => x.name);
const prices = cart.map(x => x.price);
const discountPrices = prices.map(x => x * 0.8);

console.log(names); // [ 'Widget', 'Gadget' ]
console.log(prices); // [ 9.95, 22.95 ]
console.log(discountPrices); // [ 7.96, 18.36 ]




// 콜백 함수는 각 요소에서 호출될 때 요소 자체와 요소 인덱스, 배열 전체를 매개변수로 받는다.
const items = ['Widget', 'Gadget'];
const prices = [9.95, 22.95];
const cart = items.map((x, i) => ({ name: x, price: prices[i] }));
console.log(cart);

// [ { name: 'Widget', price: 9.95 },
//  { name: 'Gadget', price: 22.95 } ]



// items.map 을 통해 prices와 합쳐주고 있다.
// 여기서 i 의 존재는 items의 요소와 prices의 요소를 인덱스를 기준으로 결합해 주기 위해서 사용되었다.
// 배열 정보를 객체 배열로 변형했다.
// 여기서 중괄호에 괄호를 쳐준 이유는 괄호를 쳐주지 않을 경우 화살표 표기법에서 블록으로 판단하기 때문이다.
// (배열안에 중괄호의 객체로 묶어주기 때문에 이렇게 괄호를 쳐준 것.)
