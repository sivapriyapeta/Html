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

let person = {name:"Priya" , Designation:"Software Engineer", Age:"30"};
for(let key in person){
    if(key== "name"){
        console.log(key + ':' + person[key]);
    }
}