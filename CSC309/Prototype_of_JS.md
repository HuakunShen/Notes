

# Prototype and `__proto__`

```javascript
function doSomething(){}
doSomething.prototype.foo = "bar";
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
console.log("doSomeInstancing.prop:      " + doSomeInstancing.prop);
console.log("doSomeInstancing.foo:       " + doSomeInstancing.foo);
console.log("doSomething.prop:           " + doSomething.prop);
console.log("doSomething.foo:            " + doSomething.foo);
console.log("doSomething.prototype.prop: " + doSomething.prototype.prop);
console.log("doSomething.prototype.foo:  " + doSomething.prototype.foo);

// output
doSomeInstancing.prop:      some value
doSomeInstancing.foo:       bar
doSomething.prop:           undefined
doSomething.foo:            undefined
doSomething.prototype.prop: undefined
doSomething.prototype.foo:  bar
```

Why is the 4th one's output `undefined`?

Read the following first

```javascript
console.log( doSomething.prototype );
// output
{
    foo: "bar",
    constructor: ƒ doSomething(),
    __proto__: {
        constructor: ƒ Object(),
        hasOwnProperty: ƒ hasOwnProperty(),
        isPrototypeOf: ƒ isPrototypeOf(),
        propertyIsEnumerable: ƒ propertyIsEnumerable(),
        toLocaleString: ƒ toLocaleString(),
        toString: ƒ toString(),
        valueOf: ƒ valueOf()
    }
}
```

```javascript
console.log(doSomeInstancing)
// output
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf()
        }
    }
}
```

## The main idea of this prototype concept is `chain`.

When some property/function is called with `.property`, direct properties in the object is looked first, then its `__proto__`, if not found, the `__proto__` of every ancestor is looked to see if the `property` looking for exists. This process is recursive, until the `property` looking for is found or `null` is reached. `null` is the base `Object`'s prototype

- `doSomeInstancing.prop`
  - `doSomeInstancing` is a instance of `doSomething`, the `prop` attribute is stored directly under `doSomeInstancing`.
  - When `doSomeInstancing.prop` is called, the attributes/properties are first looked.
  - `prop` is `"some value"`
  - return `"some value"`
- `doSomeInstancing.foo`
  - `doSomeInstancing` doesn't have `foo` property, -> check `doSomeInstancing.__proto__`
  - `doSomeInstancing.__proto__` has `foo`, which is `"bar"`
  - return `"bar"`
- `doSomething.prop`
  - `doSomething` has neither `prop` as its prototype nor in its `__proto__`
  - `prop` only belongs to `doSomeInstancing`
  - return `undefined`
- `doSomething.foo`
  - program looks for `foo` inside `doSomething`'s `__proto__`
  - while `foo` is contained in `doSomething.prototype`
  - return `undefined`
- `doSomething.prototype.prop`
  - as the log above shows, `prop` is not in `doSomething`'s properties or its `__proto__`
  - return `undefined`
- `doSomething.prototype.foo`
  - as the log above shows, `foo` is in `doSomething.prototype`
  - return `"bar"`



# Objects created with syntax constructs

```js
var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype. 
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var b = ['yo', 'whadup', '?'];

// Arrays inherit from Array.prototype 
// (which has methods indexOf, forEach, etc.)
// The prototype chain looks like:
// b ---> Array.prototype ---> Object.prototype ---> null

function f() {
  return 2;
}

// Functions inherit from Function.prototype 
// (which has methods call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null
```

# Create and Delete

```js
var a = {a: 1};

var b = Object.create(a); 

console.log(a.a); // print 1 
console.log(b.a); // print 1
b.a=5;
console.log(a.a); // print 1
console.log(b.a); // print 5
delete b.a;
console.log(a.a); // print 1
console.log(b.a); // print 1(b.a value 5 is deleted but it showing value from its prototype chain)
delete a.a;
console.log(a.a); // print undefined
console.log(b.a); // print undefined


function Graph() {
  this.vertices = [4,4];
}

var g = new Graph();
console.log(g.vertices); // print [4,4]
g.vertices = 25;
console.log(g.vertices); // print 25
delete g.vertices;
console.log(g.vertices); // print undefined
```

# Constructor

A "constructor" in JavaScript is "just" a function that happens to be called with the [new operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new).

```js
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
};

var g = new Graph();
// g is an object with own properties 'vertices' and 'edges'.
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.
```

















