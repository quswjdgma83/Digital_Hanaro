let foods = ["떡볶이", "피자", "탕수육", "청국장"];

foods2 = foods; //객체 배열을 복사했음
console.log(foods2);
console.log(foods);

foods[0] = "양장피";
console.log(foods2);
console.log(foods);
