console.log('Hello from Typescript');
let myNum: number;
let myString: string;
let myBool: boolean;
let myVar: any;
// let strArr: string[];
// let numArr: number[];
let strArr: Array<string>;
let numArr: Array<number>;
myNum = 2;
myString = 'string';
myBool = false;
myVar = 'true';
strArr = ['hello', 'world'];
numArr = [1, 2];
console.log(myNum);
console.log(myString);
console.log(myBool);
console.log(myVar);
console.log(strArr);
console.log(numArr);

let strNumTuple: [string, number];
strNumTuple = ['a', 10];
console.log(strNumTuple);

let myVoid: void = null;
let myNull: null = null;
let myUndefined: undefined = undefined;
console.log(myVoid);