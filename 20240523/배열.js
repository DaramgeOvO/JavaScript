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