let firsArray = ["Priya", "Vigeesh", "Siva", "Siri"];
let salaryEmp = [30000, 100000, 25000, 36000];
console.log("First Value of the array", firsArray[0]);
firsArray.push("Gangadhar", "Saritha");
console.log(firsArray);
let newEmpNames = firsArray.pop();
console.log(newEmpNames);
console.log(firsArray);
firsArray.shift();
console.log(firsArray);
let newSalaryEmp = [65000, 100000];
let newArrayForSalary = salaryEmp.concat(newSalaryEmp);
console.log(newArrayForSalary);
let joinString = newArrayForSalary.join('|');
console.log(joinString);
let sliceArray = newArrayForSalary.slice(0,3);
console.log(sliceArray);
newArrayForSalary.splice(2,0,250000);
console.log(newArrayForSalary);
let spliceArrayWithRemove = newArrayForSalary.splice(3,1);
console.log(spliceArrayWithRemove);
console.log(newArrayForSalary);
let spliceArrayWithRemoveAnsInsert = newArrayForSalary.splice(2,2,95000, 97000);
console.log(spliceArrayWithRemoveAnsInsert);
console.log(newArrayForSalary);
for(let i=0; i<newArrayForSalary.length; i++){
    console.log(newArrayForSalary[i]);
}
newArrayForSalary.forEach(element => {
    console.log(element);
})
let hikedSalary = newArrayForSalary.map(element => element+0.05*element);
console.log(hikedSalary);

let filterSal = newArrayForSalary.filter(element => element > 70000)
console.log(filterSal);

let reduceSal = newArrayForSalary.reduce((acc,currVal) => acc+currVal,0);
console.log(newArrayForSalary);
console.log(reduceSal);

let fruits = ["Banana", "Apple", "Orange", "Mango"]
let fruitsList = fruits.entries();
let text = "";
for(let x of fruitsList){
    text+=x;
}
console.log(text);

console.log(fruits.sort());

let numbers = [120, 256, 345, 78, 90];
let ascOrder = numbers.slice().sort((a,b) => a-b);
console.log(ascOrder);
let descOrder = numbers.slice().sort((a,b) => b-a);
console.log(descOrder);

console.log(fruits.reverse());

let findEle = numbers.find(element => element == 90);
console.log(findEle);

let includeEleTrue = numbers.includes(256);
console.log(includeEleTrue);

let includeEleFalse = numbers.includes(77);
console.log(includeEleFalse);

let indexEle = numbers.indexOf(256);
console.log(indexEle);
