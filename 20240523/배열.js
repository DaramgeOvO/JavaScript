let fruits = ["사과","바나나","귤","딸기","메론","망고","키위"];
console.log(fruits[0]);
console.log(fruits[fruits.length-1]);

/*splice 
삭제, splice(시작인덱스, 갯수 ,새로추가하는 아이템)
원본을 수정함 !! 사용에 주의해야함 */
const 삭제아이템 = fruits.splice(3,2,"감자");
console.log(fruits); //원본수정됨
console.log(삭제아이템);


let colors = ["red","blue","green","yello","white","pink"];
/* slice
선택담기 , slice(시작인덱스, 끝인덱스)
원본 보존!! */
const newColors = colors.slice(1,4);
console.log(colors);
console.log(newColors);

/* indexOf */
const index = colors.indexOf("blue");
console.log(index);
console.log(colors.indexOf("black")); //없을때는 -1 리턴

/* includes 
true,false로 나타냄*/
const isIncludes = colors.includes("green");
console.log(isIncludes);
console.log(colors.includes("black"));

/* forEach
배열에 사용하는 반복문 
forEach(아이템,인덱스,원본배열)
forEach는 배열의 모든 요소를 순회하며 각 요소에 대해 주어진 함수를 호출하기 때문에, 
배열에 있는 모든 요소가 차례로 처리되고 출력*/
colors.forEach((color,index,array)=>{
    console.log("첫번째 매개변수", color);
    console.log("두번째 매개변수", index);
    console.log("세번째 매개변수", array);
});

/* 객체의 배열 */
const persons = [
    {name: "Daramge", age: 33, gender : "female", job : "swan"},
    {name: "Dotory", age: 33, gender : "male", job : "gammer"},
    {name: "dahyae", age: 33, gender : "female", job : "nerse"},
    {name: "sanghyuck", age: 33, gender : "male", job : "firefighter"}
    
]
console.log(persons[0].name);
console.log(persons[1].job);
console.log(persons[3].age);


/* JavaScript의 구조분해 할당(destructuring assignment)은 
배열또는 객체의 값을 쉽게 추출하여 변수에 할당할 수 있도록 하는 문법입니다. 
이는 코드의 가독성을 높이고, 더 간결하게 작성할 수 있게 도와줍니다.*/
const [브니, 재원, 다혜, 상혁] = persons;
console.log(브니);
const{name, age, gender, job} = 재원;
console.log(name, age, gender, job);


const nums = [1,2,3,4,5,6,7,8,9];
/* filter
조건에 맞는 데이터만 새로운 배열에 담는다.
특징 : 데이터의 그대로, 새로운 배열의 length는 달라질 수 있음 */
const array1 = nums.filter((num)=> num>5);
console.log(array1);


/*map
데이터를 조작하여 새로운 배열에 담는다
특징 : 데이터는 변경, 새로운 배열의 length는 반드시 동일 */
const array2 = nums.map((num)=> num*10);
console.log(array2);

const jobArray = persons.map((p)=>p.job);
console.log(jobArray);

const femaleJobs = persons.filter((p)=>p.gender =="female").map((p)=> p.job);
console.log(femaleJobs);