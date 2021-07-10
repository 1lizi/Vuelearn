var name = '测试1'
var age = 18
var flag = true
function sum(num1,num2){
    return num1+num2
}

if(flag){
    console.log(sum(20,20));
}

//1.导出方式一：
export{
    flag,sum
}

//2.导出方式二：
export var num1 = 1000;
export var height = 1.86

//3.导出函数/类
export function mul(num1,num2){
    return num1*num2
}
export class Person{
    run(){
        console.log('在上机');
    }
}
//4.export default
//一个文件只能有一个默认导出
/*
const address = '西安市'
export{
    address
}

export const address = '西安市'
const address = '西安市'
export default address
*/

export default function (argument){
    console.log(argument);
}
