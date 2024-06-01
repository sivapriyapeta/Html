// let firstVarusingLet = "First Variable";
// var secondVarusingVar = "Second Variable";
// const constantVariable = "My Name is JS!!"
// firstVarusingLet ="Welcome to JS!!" ;

// console.log("firstVarusingLet value is :", firstVarusingLet);
// console.log("secondVarusingVar value is :", secondVarusingVar);
// console.log("constantVariable value is :", constantVariable);
// let numVar = 10;
// let numVar2 = 77.77
// console.log(typeof(numVar));
// console.log(typeof(numVar2));
// let booleanVar = true;
// console.log(typeof(booleanVar));
// console.log(typeof(secondVarusingVar));

// let multiply = 5 % '5';
// console.log(multiply);
// let sum = '5' + 5;
// console.log(sum);
// let boolenSum = false * 5;
// console.log(boolenSum);
// let boolWithNum = 10+true;
// console.log(boolWithNum);
// let boolWithNum2 = true+10;
// console.log(boolWithNum2);

// let person = {name:"Priya" , Designation:"Software Engineer", Age:"30"};
// for(let key in person){
//     if(key== "name"){
//         console.log(key + ':' + person[key]);
//     }
// }

// const value1 = Symbol("Welcome");
// console.log(value1);
// console.log(typeof(value1));
// console.log(value1.description);

// let bigVar = 123455678908765432134567865335674223456787654n;
// console.log(typeof(bigVar));

// let numbers = [10,20,30,40,50];
// for(let n of numbers){
//     console.log(n);
// }

let employeeData = {empName : "Priya", empAge : 30 , empJob: "Senior Software Engineer"};
for(let key in employeeData){
    console.log(key + ":" + employeeData[key]);
}