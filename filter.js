// practice Problem filter()
// 3. you have an array of objects:

// const intructor = [
//    {name: 'nodi', age: 23, position: 'senior'},
//    {name: 'akhi', age: 26, position: 'junior'},
//    {name: 'shobuj', age: 30, position: 'senior'},
// ]

const intructor = [
  { name: "nodi", age: 23, position: "senior" },
  { name: "akhi", age: 26, position: "junior" },
  { name: "shobuj", age: 30, position: "senior" },
  { name: "puspita", age: 17, position: "junior" },
  { name: "anjuma", age: 27, position: "senior" },
];

const senior = intructor.filter((p) => p.position === 'senior');
// console.log(senior);