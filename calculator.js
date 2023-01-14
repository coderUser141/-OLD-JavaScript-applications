function end(){
a = 0;
b = 0;
o = 0;
}
function add(){
alert(a+b);
}
function sub(){
alert(a-b);
}
function mul(){
alert(a*b);
}
function div(){
alert(a/b);
}
function calculate(){
if(o == "+"){
add();
}else if(o == "-"){
sub();
}else if(o == "*"){
mul();
}else if(o == "/"){
div();
}
}
function testb(){
if(typeof b !== "number"){
enterb();
}else{
calculate();
}
}
function enterb(){
b = prompt("number");
testb();
return b;
}
function testo(){
if(o != "+" || o != "-" || o != "*" || o != "/"){
entero();
}else{
enterb();
}
}
function entero(){
o = prompt("Operator * / + - ");
testo();
return o;
}
function testa(){
if(typeof a !== "number"){
entera();
}else{
entero();
}
}
function entera(){
a = prompt("Number");
testa();
return a;
}
function main(){
alert("Program Startup");
var a;
var o;
var b;
entera();
return b,a,o;
}
main();