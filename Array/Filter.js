// filter는 배열에서 필요한 것들만 남길 목적으로 만들어졌다.
const cards = [{ suit: 'A', value: 1 }, { suit: 'B', value: 2 }, { suit: 'C', value: 3 }];
const v2cards = cards.filter(c => c.value === 2);
console.log(v2cards); // [{ suit: 'B', value: 2 }]

// map 과 비슷하게 사용하지만 map은 배열을 다른 형식으로 변환할 때.
// filter 는 말 그대로 일치하는 값을 뽑아올 때 사용하면 된다.






// Map + Filter
const cards = [{ suit: 'A', value: 1 }, { suit: 'B', value: 2 }, { suit: 'C', value: 3 }];
const a = { 'A': 'a', 'B': 'c', 'C': 'c' };

const result = cards.filter(c => c.value === 2).map((c) => {
    return c.value + a[c.suit];
});
console.log(result); // [ '2c' ]

// 필터로 한번 여과하여 map 으로 배열을 변경해 만들어 주는 모습
