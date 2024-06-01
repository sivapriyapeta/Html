function Employee(name, designation, yearOfBirth){
    this.name = name;
    this.designation = designation;
    this.yearOfBirth = yearOfBirth;
}

Employee.prototype.calculateAge = function(){
    console.log("Current Age is" + (2024-this.yearOfBirth) );
}
console.log(Employee.prototype);

let emp1 = new Employee("Vigeesh", "Architect", 1988);
console.log(emp1);
emp1.calculateAge();

