alert('Hello world!'[3]); //경고창
console.log('Hello world!'); //콘솔창에 띄우기
'자동으로 문자열 됨'[2];
// === 같다
// !== 다르다
// 위에껀 "값과 자료형이 같은지"
// != == 이건 "값이 같은지"
// ex
console.log(1 == "1")
// => true 왜냐하면 "1" 은 자료형은 문자라도 어떻게든 변화하면 1이니까
console.log(1 === "1")
// => false 왜냐하면 "1"은 숫자는 같아도 자료형이 다르니까
if (12 > 3) {
    alert("falls");
} else {
    alert("true");
}
typeof("gelly");
//ex
alert(typeof(10)===("number"));
alert(`that\`s 80+22 = ${80+22}.`); //템플릿 문자열
const SangSue = 32 //상수형 선언(변경불가) 선언할떄 반드시 값도 같이 지정
let BuhngSue = 32 //변수선언
