//세미콜론 붙여도되고 안붙여도 됨;
//대신 안붙일거면 줄바꿈 반드시 해주어야함
alert('Hello world!'[3]); //경고창
console.log('Hello world!'); //콘솔창에 띄우기
'자동으로 문자열 됨'[2]; // =>동
"Hello!".length; //문자열 길이 구하기
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
a += 3; // a=a+3; 이거 왜안되냐
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
if (score === 4.5) {
    alert("God");
} else if (4.2 <= score && score < 4.5) {
    alert("Love of president");
} else {
    alert("null")
} //이런식으로 짜는거보다
if (score === 4.5) {
    alert("God")
} else if (4.2 <= score) {
    alert("Love of president");
} else {
    alert("null");
} //이런식으로 짜는게 효율적이다. if문은 위에서 아래로 내려오고 else는 위의 if문에 조건이 맞지 않을때 넘어오는거라 바로 넘어온다.
const array = [273, "string", true, function() {}, {}, [273, 103]]; //배열
array[1]; // => "string"
const numbers = [250, 304, 234, 24]; //배열이름은 보통 복수형으로
numbers[2+3]; // => 24 대괄호안에 계산식 넣어도됨
numbers.length; // => 4 배열 개수 확인
numbers[numbers.length - 1]; // => 24 배열 마지막요소 선택방법
numbers.push(400); //배열에 요소추가
numbers[20] = 203; //베열 20번째 인덱스에 강제추가
numbers[numbers.length] = 56; //이런식으로도 마지막자리에 추가할수도 있음
numbers.splice(2, 1); //2번째인덱스에서 1개요소를 제거한단뜻. numbers.splice(인덱스, 제거할 요소의 게수)
const index = numbers.indexOf(304); //값으로 요소 제거하기. indexOf는 특정값의 인덱스번호를 찾는거. 저짓거리로 304는 1번자리란걸 알아내 index변수에 1 저장.
numbers.splice(index, 1); //index번호 자리의 요소 1개제거로 304를 제거한다.
numbers.splice(2, 0, 45); //특정위치에 요소 저장하기. 이러면 2번자리에 아무것도 지우지않고 3번자리에 추가함
const todayList = ["Buy milk", "Check the e-mail", "Training"];
for (const j in todayList) {
    console.log(`${j}번째 할일: ${todayList[j]}`);
} //for in반복문 
for (const todo of todayList) {
    console.log(`오늘할일: ${todo}`);
} //for of반복문. 순차적으로 배열안요소를 of앞쪽의 변수에 할당함. 결과는 위랑 비슷함.
for (let i = 0; i < 5; i++) { //i++;세미콜론붙이면 안되는데 왜그런거지?
    console.log(`${i}번째반복이다우`);
} //for반복문. 찐 근본
for (let i = 1; i <= 100; i++) {
    console.log(`${i}번째반복이다우`);
} //1부터 100까지 반복하는법
while (true) {
    alert(i);
    i++;
} //while 반복문. 표현식이 참인동안 계속 반복. 이코드는 무한반복
//break 탈출
//continue 현재반복넘기고 다음반복 실행
//별라미드 만들기
for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < i; j++) {
        console.log("*");
    }
    console.log("\n");
} //내가짠거
let output = "";
for (let i = 1; i <= 9; i++) {
    for (let j = 0; j < i; j++) {
        output += "*";
    }
    output += "\n";
}
console.log(output); //답지버전
//+찐 피라미드 만들기
output = "";
for (let i = 1; i < 15; i++) {
    for (let j = 15; j > i; j--) {
        output += " ";
    }
    for (let k = 0; k < 2 * i - 1; k++) {
        output += "*";
    }
    output += "\n";
}
console.log(output);
//함수
const hamsou = () => {
    alert("hello!");
    alert("i am me");
} //익명함수
function hamsou2() {
    alert("hello!");
    alert("i am me");
} //선언적 함수
function reX(x) {
    return x*x;
} //x넣으면 x^2 만들어주는 함수 
function isLeapYear(year) {
    return (year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)
}//윤년 찾아주는 함수, 논리합 논리곱 연산자 72번째줄 참고. 보통 불값으로 리턴되어 나오는 함수는 is로 시작함
//배열안에서 최솟값 찾아주는 함수
function min(array) {
    let output = array[0]; //매게변수(배열)로 받은 array의 0자리값을 output에다 저장함
    for (const item of array) { //매게변수(배열)array안의값을 매 반복마다 item에 할당함
        if (output > item) { //output에 들어있는 array의 0번째자리값이 item에든 array의 값보다 크다면
            output = item; //output에 item값 할당
        }
    }
    return output;
}
const testArray = [52, 273, 32, 103, 275, 24, 57];
console.log(`${testArray} 중에서`);
console.log(`최솟값 = ${main(testArray)}`);
min(23, 234, 534, 635); //함수에 배열적을떄 대괄호 생략하고 적어도됨
function smaple(...items) { //가변 매개변수 함수 ...3개찍으면 매개변수가 배열로 들어옴(나머지 매개변수). 매개변수를 여러게 호출하고 싶을떄 쓰는거
    console.log(items);
}
smaple(1, 2)
smaple(1, 2, 4) //매개변수 몇개를적든 다 적용됨
//가변 매개변수 함수를 이용해 최솟값프로그램 배열없이 만들기
function minNonArray(...items) {
    let output = items[0];
    for (const item of items) {
        if (output > item) {
            output = item;
        }
    }
    return output;
}
function sample2(a, b, ...c) { //나머지 매개변수. 이름그대로 원래 선언된 변수뺀 ...뒤에 변수(여기선 c)는 그냥 배열로 넣어버림
    console.log(a, b, c); //그래서 여기서 c는 변수가아니고 배열임
}
sample2(1, 2); // => 1 2
sample2(1, 2, 3); // => 1 2 [3]
sample2(1, 2, 3, 4); // => 1 2 [3, 4]
function sample3(...items) {
    console.log(items);
} //전개연산자로인해 매개변수로 변수를 각각 입력해도 다 배열로 변환해서 값을 넣어줌. 178내용이 이거 이용하면됨
array = [1, 2, 3, 4];
sample3(array); // => Array(4) 요소가 4개있는 배열이란뜻
sample3(...array); // => [1, 2, 3, 4]
function earnings (name, wage=8590, hours=40) { //기본 매개변수. 아무것도 입력안하면 자동으로 시급에8590, 시간에40을 할당함. 주의할점: function smaple(a=3, b) 이순서로 해버리면 앞에서부터 순차적으로 입력해줘야하는데 자동으로 a들어다고 다음에 b가 들어갈거라 기본값이 의미가 없다.
    console.log(`# ${name}님의 급여정보`);
    console.log(`- 시급: ${wage}원`);
    console.log(`- 근무 시간: ${hours}원`);
    console.log(`- 급여: ${wage*hours}원`);
    console.log("");
} //시급과 시간을 입력받아 급여를 계산하는 함수.
earnings("구름"); // => 이름 구름의 기초시급과 기본근문시간40으로 계산값이 나옴
earnings("별", 10000); //시급만원에 근무시간은 기본인 40
earnings("하늘", 12000, 80); //시급1만2천원에 근무시간 80
function isLeapYear2(year=new Date().getFullYear()) {
    return (year % 4 ===0) && (year % 100 !== 0) || (year % 400 === 0)
} //윤년찾아주는함수에 기본값을 현재 년도로하는거 추가
// TMI 구버전 자바스크립트에서는 가변매개함수로 arguments를 사용함
// TMI 구버전 자바스크립트에서는 전개연산자로 apply()함수를 이용함
// 자바스크립트는 함수를 하나의 자료로 보기에 만드는위치가 지정되있지않음
// 그래서 자바스크립트는 매개변수자리에다가 함수를 집어넣을수 있음. 콜백함수라함
//콜백함수;선언적 함수
function callThreeTimes(callback) {
    for (let i=0; i<3; i++) { //3번반복
        callback(i); //231번째줄에서 매개변수로 print를 넣었으니 print(i);로 작동할거임
    }
}
function print(i) { //출력용 함수
    console.log(`${i}번째 함수 호출`);
}
callThreeTimes(print);
//콜백함수;익명함수
callThreeTimes(function(i) { //여기 괄호 하나만. 왜 이렇게 치지...?
    console.log(`${i}번쨰 함수 호출`);
}) //여기서침. 함수의 매게변수위치에서 함수를 선언하는건가?
const numbers = [273, 52, 103, 32, 57];
numbers.forEach(function(value, index, array) {
    console.log(`${index}번쨰 요소 : ${value}`);
}) //forEach(str)메소드. 이해못함 for i in str
let numbers = [273, 52, 103, 32, 57];
numbers = numbers.map(function(value, index, array) {
    return value*value;
}) //map() 메소드
const evenNumbers = numbers.filter(function (value) {
    return value % 2 === 0;
}) //filter()메소드
array.map((value) => value*value) //화살표 함수
//p256 객체설명. 귀찮음 시간날때 다시 이해ㄱㄱ
//객체생성 {}로. 쉼표로 구분
const product = {
    제줌명: "7D 건조 망고",
    유형: "당절임",
    성분: "망고, 설탕, 메타중황산나트륭, 치자황색소",
    원산지: "필리핀"
}
product["제품명"]; // => "7D 건조 망고" 접근하는방법
product.유형 //온점도 가능
//배열내부는 요소. 객체내부는 속성. 객체속성에 함수넣으면 메소드라함
const pet = {
    name: "구름",
    eat: function (food) {
        alert(this.name + "은/는" + food + "을/를 먹습니다."); //익명함수로 선언
    },
    eat2 (food) {
        alert(this.name + "은/는" + food + "을/를 먹습니다."); //메소드 이 선언방법이 더 간단함
    },
    eat3: () => {
        alert(this.name + "은/는" + food + "을/를 먹습니다."); //화살표함수로 선언
    }
} //객체안 속성에서 자기자신의 속성을 호출하고시피을때는 this를 이용
pet.취미 = "게임"; //객체 속성 추가하는법
delete pet.name; //객체 속성 삭제방법
2**2 // 2^2 = 4 제곱연산자임
//근데 객체 속성에는 기본자료형이라하는 숫자, 문자열, 불 이 못들어감
new Number(10); //이런식으로 기본자료형도 객체로 생성 가능
//자바스크립트는 객체아니더라도 넵다 . 찍고 메소드 박으면 알아서 임시로 객체로 변환해 사용해줌
//number객체
const l = 123.456789;
l.toFixed(2); // => "123.46" 소수점 2자리까지 출력
//string객체
const stringA = "\n실수해서 띄어쓰기랑 줄바꿈이 엄청 들어갔내 ";
stringA.trim(); //문자열 앞뒤 공백이랑 줄바꿈 제거됨
stringA.split(" ") //공백을 기준으로 잘라서 배열을 만듬
//다른 메소드는 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String 참고
//JSON(JavaScript Object Notation)객체
//규칙
//1. 값을 표현할땐 문자열, 숫자, 불 자료형만 가능(함수등은 사용 불가)
//2. 문자열은 반드시 따옴표를 붙여야함
//3. 키(key)에도 반드시따옴표 붙여야함. 키는 속성임
//쫌 어려운듯 아마 배열안에 객체 쑤셔넣는거인듯. 포멧방식인가...?
//ex 책을 표현하는법
const book = [{ //근데 인터넷에서 여기 :표시로 되어있는데..? 책도그렇고 실제론=밖에 안되는데..?
    "title": "혼자 공부하는 파이썬", //근데 이거 따옴표는 왜치는거지?
    "price": 18000,
    "publisher": "한빛미디어"
}, {
    "title": "HTML5 왭 프로그래밍 입문",
    "price": 26000,
    "publisher": "한빛아카데미"
}] //책 p272 뭔지 모르겠으니까 나중에 다시 이해하도록
Math.PI //Math 객체. 수학 관련된거있는데 https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math가서 알아서 찾아봐.
const num = Math.random() //Math 난수. 참고로 아무것도 안하면 0~1사이에서 소숫점까지 쳐서 뽑음
console.log(num*10); //이런식으로하면 0~10사이 랜덤숫자. 도데체 뭔원리야
console.log(num*10-5); //-5~5사이 범위. 진짜 어떤 원리인거지
console.log(Math.floor(num*10-5)) //정수 -5~5사이 렌덤한 숫자
let [a, b] = [1, 2] //a에는1, b에는2가 할당됨. 이름은 배열기반으 다중할당인데 실제론 a,b각각 변수로써 적용됨
const {name, price} = book //객체에서 속성을 꺼내와 변수로 만듬
const {a1=name, b1=price} = book //이런식으로하면 e에는 name의값이 할당되고 t에는 price값이 할당됨
const 물건_200301 = ["우튜", "식빵"]
const 물건_200302 = 물건_200301 //이런식으로하고 물건_200302배열에다가 요소를 추가하고 물_200301을 출력해도 결과에는 추가한 요소가 들어있음. 이런걸 얕은 복사(참조복사)라고함
const 물건_200303 = ["고구마", ...물건_200301, "토마토"] //만약 독립적으로 따로 조작되게 하고싶으면 깊은 복사를 해야함. 전재연산자를 이용하면됨. 이렇게 앞뒤로 쑤셔넣으면 한번에 배열안에 추가할수있음
//객체도 똑같이 {...객체}식으로해야 깊은복사가 됨
document.addEventListener("DOMContentLoaded", ()=>{ //DOMContentLoaded은 오타나도 오류가 안나옴. 잘못적으면 줏되는거임
    
})

