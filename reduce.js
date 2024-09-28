const people = [
  { name: "Meena", age: 20 },
  { name: "rina", age: 15 },
  { name: "susmitha", age: 22 },
  { name: "mita", age: 26 },
];

const manus = people.reduce((p, c) => p + c.age, 0);
console.log(manus);


