const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
arr.join();             "1,,hello,,true,"
arr.join('');           "1hellotrue"
arr.join(' -- ');       "1 -- -- hello -- -- true --"

// Array.prototype.join은 매개변수로 구분자 하나를 받고 요소들을 하나로 합친 문자열을 반환한다.
// 매개변수가 생력되면 쉼표가 기본이고 예제와 같이
// 정의되지 않은 요소, 삭제된 요소, null, undefined는 모두 빈 문자열로 취급된다.

// HTML의 ul 리스트 같은 것도 만들 수 있다.