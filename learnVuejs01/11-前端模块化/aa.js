//1.导入的{}中定义的变量
import {flag,sum} from "./a.js"

if (flag){
    console.log('好好学习，才能天天向上');
    console.log(sum(20,40));
}

//2.直接导入export定义的变量
import {num1,height} from "./a.js";

console.log(num1);
console.log(height);

//3.导入export的function/class
import{mul,Person} from "./a.js";
console.log(mul(40,50));
const p = new Person();
p.run()

//4.导入export default中的内容
import greet from "./a.js";

greet('你今天真好看');

//4.统一全部导入
//import {flag,num,num1,height,Person,mul,sum}from"./a.js"
 import *as a from'./a.js'
console.log(a.flag);
 console.log(a.height);
