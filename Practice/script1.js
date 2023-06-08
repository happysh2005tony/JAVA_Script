//세미콜론 붙여도되고 안붙여도 됨;
//대신 안붙일거면 줄바꿈 반드시 해주어야함
alert('Hello world!'[3]); //경고창
console.log('Hello world!'); //콘솔창에 띄우기
'자동으로 문자열 됨'[2]; // =>동
// === 같다
// !== 다르다
// 위에껀 "값과 자료형이 같은지"
// != == 이건 "값이 같은지"
// ex
console.log(1 == "1");
// => true 왜냐하면 "1" 은 자료형은 문자라도 어떻게든 변화하면 1이니까
console.log(1 === "1");
// => false 왜냐하면 "1"은 숫자는 같아도 자료형이 다르니까
if (12 > 3) {
    alert("!false");
} else {
    alert("!true");
}
typeof("gelly"); //자료형 뭔지 나옴. 이건 문자형이겠지
//ex
alert(typeof(10)===("number"));
alert(`that\`s 80+22 = ${80+22}.`); //템플릿 문자열
const SangSue = 32; //상수형 선언(변경불가) 선언할떄 반드시 값도 같이 지정
let BuhngSue = 32; //변수선언
//var 도 가능한데 옜날거니까 쓰지마셈
//복입 대입 연산자 ex
a+=3; //; a=a+3;
//증감 연산자
a++; //후위(실행하고 값더함)
++a; //전위(실행하기전에 값더함)
//undefined 자료형(무값은 null)
//자바스크립트는 지꼴리는데로 자료형 바꿔버림
const input1=prompt("문제","답지 기본입력"); //문자열 입력(input)
alert(input); //input에 저장된 내가 입력한 값을 출력
const input2=confirm("수락할기가?"); //불 입력; 이분법적 대답(확인은 true 취소는 false)
Number("123") // =>123 강제 숫자형 만들기. 문자들어있어서 숫자형으로 변경불가시 NaN(Not A Number)나옴. 불도 변경하면 true => 1 / false => 0 으로 나옴
"52" - 0 // =>52 이런식으로 문자형가지고 숫자형 연산때리면 강제로 숫자형으로 바꿔버림
String(52.273); // =>"52.273" 강제 문자열만들기
52 + "" // =>"52" 이것도 숫자형가지고 문자형 연산때리면 강제 문자열됨
Boolean(0); //강제 불형으로 바꾸기. 대부분은 true로 나옴. 단 0, NaN, "", null, undefined 는 false
!!273 //부정두번해서 다시 불형으로 바꾸기
//인치 센치로 바꾸는 프로그램
const rawInput = prompt("몇인치고?"); //값받기
const inch = Number(rawInput); //받은건 문자형이라 숫자형으로 바꿈
const cm = inch * 2.54;  //TMI : 인치에 2.54를 곱하면 센치가됨
alert(`${inch}인치는 ${cm}센치이다`);
//시간알아내는법
const date = new Date();
date.getFullYear();
date.getMonth() + 1; //윌을 0월부터 센다고함
date.getDate();
date.getHours(); //24간 단위로 나옴
date.getMinutes();
date.getSeconds();
//switch조건문
const input = Number(prompt("숫자를 입력", "숫자"));
switch (input % 2) {
    case 0:
        alert("짝수데스");
        break;
    case 1:
        alert("홀수데스");
        break;
    default:
        alert("숫자치라고");
        break;
}
//조건부 연산자 other say 삼항연산자
(true) ? "true" : "false"; //(불값) ? 참일때결과 : 거짓일때결과;
//논리합 연산자(틀릴때만 실행)
true || console.log("실행안함"); // =>true 앞에게참이면 뒤에꺼씹음. 자바스크립트는 전체값이 확실히 참이라 결정나면 뒤에는 계산안함
false || console.log("실행"); // =>실행
//논리곱 연산자(맞을때만 실행)
false && console.log("실행안함"); //걍 논리합이랑 반대