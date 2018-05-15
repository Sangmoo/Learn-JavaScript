function getSentence({ subject, verb, object }) {
    return console.log(`${subject}, ${verb, object}`);
}
const o = {
    subject: "sangmoo",
    verb: "blog",
    object: "me"
};
getSentence(o);

// 출력 값으로 sangmoo, me 가 나오는데 verb에 해당하는 blog 가 없는 이유는 쉼표연산 때문인듯 하다.

// 해체 할당과 마찬가지로 프로퍼티 이름은 반드시 유요한 식별자여야 하고,
// 들어오는 객체에 해당 프로퍼티가 없는 변수는 undefined 를 할당받는다.
// (매개변수가 객체로 { } 되어 있다는 것을 다시 확인!)

// 객체를 매개변수로 받았다는 소리는 배열도 가능함을 뜻한다.




function getSentence([subject, verb, object]) {
    return console.log(`${subject}, ${verb, object}`);
}
const arr = ["sangmoo", "blog", "me"];
getSentence(arr);

// 여기서도 매개변수를 잘 보면 [ ]  배열형으로 받았다.

// 또한 확장 연산자(...)을 써서 남는 매개변수를 이용할 수 있다.

function addPrefix(prefix, ...words) {
    //나중에 더 좋은 코드로 바꿀 수 있다고 합니다.
    const prefixedWords = [];
    for (let i = 0; i < words.length; i++) {
        console.log(words[i]);
        prefixedWords[i] = prefix + words[i];
    }
    return prefixedWords;
}
console.log(addPrefix("1ilsang", "blog", "me"));
