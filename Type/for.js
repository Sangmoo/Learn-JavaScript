// for..in
const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for(let prop in player){
  if(!player.hasOwnProperty(prop)) continue;
  console.log(prop + ': ' + player[prop]);
}

// for...in 루프는 객체의 프로퍼티에 루프를 실행하도록 설계된 루프이다.
// 프로퍼티 순서대로 돌아간다.



// for..of
const hand = [randFace(), randFace(), randFace()];
for(let face of hand)
  console.log(`You roll...${face}!`);

// es6, 배열에 루프를 실행해야 하지만 요소의 인덱스를 알 필요는 없을 때 알맞다.
// for..of 는 배열은 물론 이터러블(iterable) 객체에 모두 사용할 수 있는 범용적 루프이다.
