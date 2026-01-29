//Module Pattern (IIFE)
const counterModule = (function() {
  let counter = 0;

  return {
    increment() {
      counter++;
      console.log(`Counter: ${counter}`);
    },
    reset() {
      counter = 0;
      console.log("Counter reset");
    }
  };
})();

counterModule.increment(); 
counterModule.increment(); 
counterModule.reset();     

//module pattern
const userModule = (function() {
  let users = [];

  return {
    addUser(name) {
      users.push(name);
      console.log(`${name} added`);
    },
    listUsers() {
      return [...users];
    }
  };
})();

userModule.addUser("Valeria"); 
console.log(userModule.listUsers()); 

export function greet(name) {
  return `Hello, ${name}!`;
}

import { greet } from './utils.js';

console.log(greet("Valeria"));