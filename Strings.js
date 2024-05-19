let strObj1 = new String(" Javascript");
let str = "Javascript Learning";

console.log(strObj1.charAt(2));
console.log(strObj1.charCodeAt(7));

let stroObj2 = "Session";
console.log(stroObj2.concat(strObj1));
console.log(stroObj2.lastIndexOf('s'));
console.log(str.search("Learning"));
console.log(str.indexOf('s'));

let newString = str.replace(' ','-');
console.log(newString);

let myName = "Siva-Priya  ";
console.log(myName.substring(0,4));

console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

console.log(myName.split('-'));
console.log(myName.trim());
console.log(`Hello,I am ${strObj1} and I work in`);