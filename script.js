//製作基本計算機
let num1 = prompt("請輸入數字1");
let num2 = prompt("請輸入數字2");

num1 = parseFloat(num1);
num2 = parseFloat(num2);//將字串轉成數值 有小數點的也可以

document.write(num1 + num2);//這裡會將num1跟num2當成字串 因為prompt的預設 所以前面藥箱字串轉數值

