//1.使用commonjs的模块规范化
const{add,mul} = require('mathUtils.js')

console.log(add(20,30));
console.log((mul(20, 40)));

//2.使用ES6的模块化的规范
import{name,age,height}from "./info";

console.log(name);
console.log((age));
console.log((height));