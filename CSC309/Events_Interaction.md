# Events and Interaction

- All events occur on HTML elements in the browser
- JavaScript is used to define the action that needs to be taken when an event occurs
- When [HTML Event] , do [JS Action]

## Adding action listeners in HTML

To show that actions originate from HTML elements, we can put attributes inside of elements

```html
<div onclick="alert('Clicked!')">...</div>
```

## Setting up listeners in JS

An **event listener** in JS programmatically sets an event attribute on an HTML element

Select an element in JS, and then,

```js
element.addEventListener(event, functionToExecuteWhenEventOccurs);
element.addEventListener(event, callback);
```

functionToExecuteWhenEventOccurs is a callback function, is what will happen when even occurs.

## Callback Functions

- A callback is a function that is designated to be 'called back' at an appropriate time
- In the case of events, it will be ‘called back’ when the event occurs
- Can be an anonymous function, or a function defined outside of the event listener

```js
// Method 1
button.addEventListener("click", function() {
  alert("Clicked!");
});

// Method 2
function alertClick() {
  alert("Click!");
}

button.addEventListener("click", alertClick);
```

## Event Objects

All events that occur create a JS Object with information about that event:

- Event.target - event origin element
- Event.type - type of event

Passed to the callback function as argument,

```js
function callback(e) {
  e.target;
  e.type;
}
```

## Common Events

- **onchange** An HTML element has been changed
- **onclick** The user clicks an HTML element
- **onmouseover** The user moves the mouse over an HTML element
- **onmouseout** The user moves the mouse away from an HTML element
- **onkeydown** The user pushes a keyboard key
- **onkeyup** The user releases a keyboard key
- **onload** The browser has finished loading the page

## Non-Blocking JS

For the most part, we’ve dealt with **blocking** code

- Code that runs one instruction after another, and makes next instructions wait (block)

Non-blocking code allows JS to continue executing instructions while we wait for some blocking code to complete

**Example:**

```js
// print '2 seconds' after 2 seconds
// Will execute instructions after without waiting for setTimeout to finish
setTimeout(function() {
  console.log("2 seconds");
}, 2000);
```

## Asynchronous

Non-blocking code is an example of **Asynchronous** programming

## JavaScript Event Loop

### JS runtime engine

- JavaScript must be "compiled" and interpreted
- Needs a "runtime" environment
- In Chrome, the JS runtime is the **V8 Engine**
- Javascript is an **event-driven** language
- How does it keep track of all of these events?
  - Event Loop

JavaScipt is **single-threaded**

- It runs one thing at a time
- Doesn't seem asynchronous

The **Event Loop**

- A way of scheduling events one after the other
- Often with the help of the platform the engine is running on (i.e., the browser)

### Interesting note: 

- `setTimeout` and other non-blocking functions aren’t built in to the V8 runtime! 
- They live in the platform JS is running on 
  - Chrome contains the instructions for setTimeout 

[demo](http://latentflip.com/loupe/)

