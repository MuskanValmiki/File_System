//regex functions expressions 
// 1.exec()->this function will return an array for match or null for no match.
let reg=/muskan/g;
console.log(reg);//it gave holl regex
console.log(reg.source);//it gave only inside regox data

let s="hii i am muskan .muskan like to do coding";
let result = reg.exec(s);//this function will return an array for match or null for no match 
console.log(result);//it gave array and in this array muskan,index:9 and input:"hii i am muskan like to do coding"
console.log(result.index);//it gave 9 because 9 index we get first match
console.log(result.input);//it gave us input which we define 

// 2.test()->returns true or false
let result2=reg.test(s);
console.log(result2);//it gave true because muskan in string .test check the reg is it in string or not

// 3.match()->it will returns array of results or null.it returns match array.
// let result3=reg.match(s);it is wrong !!
let result3=s.match(reg);//this is right
console.log(result3);//it gave array['muskan',index:9,input:'hii i am muskan.muskan like to do coding,groups:undefined]

// 4.search()->returns index of first match else -1
let result4=s.search(reg);
console.log(result4);//it check where we get reg in string then gave index

// 5.replace()->returns new replaced  string with all the replacements.
let result5=s.replace(reg,'akrati');
console.log(result5);//it replace reg to that name which we gave .if we use g then all reg it will check and replace

let result6=s.replace(reg,'kajal');
console.log(result6);//it replace both place where we get same reg