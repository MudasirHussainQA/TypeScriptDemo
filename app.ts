const person:{
  name: string;
  age:number;
  hobbies: string[];
  role: [number,string];

}

 = {
  name:'Mudasir',
  age: 31,
  hobbies: ['Cricket','Cycling'],
  role: [1,'Automation Engineer']
};
person.role.push('admin');
person.role.push('QA');
var value=person.role.lastIndexOf('admin');
console.log("Value is",value);

console.log("Designation:",person.role);
let favoriteactivities: string[];
favoriteactivities=['Cycling'];
console.log(favoriteactivities);
console.log(favoriteactivities[0]);

console.log(person.name);

for(const hobby of person.hobbies)
{
  console.log(hobby.toUpperCase());

}
