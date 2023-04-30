let i = 0;
const a = {
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
  [`foo${++i}`]: i,
};

console.log(a.foo1); // 1
console.log(a.foo2); // 2
console.log(a.foo3); // 3
console.log(a); 
//
//=======================================================================
//
const items = ["A", "B", "C"];
const obj = {
  [items]: "Hello",
};

console.log(obj); // A,B,C: "Hello"
console.log(obj["A,B,C"]); // "Hello"
//
//=======================================================================
//
const param = "size";
const config = {
  [param]: 12,
  [`mobile${param.charAt(0).toUpperCase()}${param.slice(1)}`]: 4,
};

console.log(config); // {size: 12, mobileSize: 4}
//
//=======================================================================
//
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// { foo: "baz", x: 42, y: 13 }
//
//=======================================================================
//
const person1 = {};
person1['firstname'] = 'Mario';
person1['lastname'] = 'Rossi';

console.log(person1);
// Expected output: "Mario"

const person2 = {
  firstname: 'John',
  lastname: 'Doe'
};

const lastname = 'lastname';
console.log(person2[lastname]);
// Expected output: "Doe"
//
//=======================================================================
//
const object = {};
object.$1 = "foo";
console.log(object.$1); // 'foo'
//
//=======================================================================
//
