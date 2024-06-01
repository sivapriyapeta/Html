var map = new Map();
map.set("firstName", "SivaPriya")
    .set("lastName", "Peta")
    .set("age", "30");

console.log(map);
console.log(map.has("firstName"));
console.log(map.get("firstName"));
console.log(map.delete("age"));
console.log(map.entries());

class EmployeeData{
    constructor(fName, lName){
        this.fName = fName;
        this.lName = lName;
    };
    DisplayDetails(){
        console.log("First Name : " + this.fName);
        console.log("Last Name : " + this.lName);
    }
}
var emp1 = new EmployeeData("SivaPriya","Peta");
console.log(emp1.DisplayDetails());