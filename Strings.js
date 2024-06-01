// let strObj1 = new String(" Javascript");
// let str = "Javascript Learning";

// console.log(strObj1.charAt(2));
// console.log(strObj1.charCodeAt(7));

// let stroObj2 = "Session";
// console.log(stroObj2.concat(strObj1));
// console.log(stroObj2.lastIndexOf('s'));
// console.log(str.search("Learning"));
// console.log(str.indexOf('s'));

// let newString = str.replace(' ','-');
// console.log(newString);

// let myName = "Siva-Priya  ";
// console.log(myName.substring(0,4));

// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());

// console.log(myName.split('-'));
// console.log(myName.trim());
// console.log(`Hello,I am ${strObj1} and I work in`);

// let regualrExpr = /a[bcd]+/;
// let str1 = "abcd";
// console.log(regualrExpr.test(str1));

let mobileNumberFormat = /\(?\d{3}\)?-? *\d{3}-? *-?\d{4}/;
let number = ["3087774825", "(281)388-0388", "(281)388-0300", "(979) 778-0978", "(281)934-2479", "(281)934-2447",
  "(979)826-3273" , "(979)826-3255", "1334714149", "281-342-2452", "123"
];
number.forEach(Element => 
    {
        if(mobileNumberFormat.test(Element))
        {
            console.log("Test Passed for : "+Element)
        }
        else
        {
            console.log("Test failed for : "+Element)
        }
    });


// 3087774825
// (281)388-0388
// (281)388-0300
// (979) 778-0978
// (281)934-2479
// (281)934-2447
// (979)826-3273
// (979)826-3255
// 1334714149
// (281)356-2530
// (281)356-5264
// (936)825-2081
// (832)595-9500
// (832)595-9501
// 281-342-2452
// 1334431660