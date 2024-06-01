//callbacks

function WelcomeNote(firstName, lastName, callback){
    console.log("Welcome "+ firstName);
    return callback(firstName,lastName);
}
var callbackReturnValue = function(fn, fn1){
    return `This is ${fn}${fn1} learning page`;
}
console.log(WelcomeNote("SivaPriya", "Peta", callbackReturnValue));

//IIFEs
const empId = (function(){
    let count = 0;
    return function(){
        ++count;
        return `emp${count}`;
    }
})();

console.log("First Employee : "+empId());
console.log("Second Employee : "+empId());