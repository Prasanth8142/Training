// Rename Varaible Name Using Destructuring
let a={
    name:"prasanth",
    age:24,
    city:"Bangalore"
}
let {name:Studentname,age:age,city:city,adress="DMM"}=a;
console.log(Studentname);
console.log(age);
console.log(city);
console.log(adress);



console.log("Default value");
const user = {
  username: "admin"
};

const { username, role = "guest" } = user

console.log(username)
console.log(role)    



console.log('Nested Object Destructuring');

const employee = {
  id: 101,
  details: {
    name: "Kiran",
    department: "IT",
   
  }
};

const {
  details: { name, department,age2="30" }
} = employee;

console.log(name);      
console.log(department); 
console.log(age2)