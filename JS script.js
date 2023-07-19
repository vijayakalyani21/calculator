function add(){
    let a=parseInt(document.getElementById("value1").value);
    let b=parseInt(document.getElementById("value2").value);
    let c=a+b;
    document.getElementById("answer1").innerHTML="Addition is"+c;

}
function sub(){
    let a=(document.getElementById("value1").value);
    let b=(document.getElementById("value2").value);
    let c=a-b;
    document.getElementById("answer2").innerHTML="Subtraction is"+c;

}
function mult(){
    let a=(document.getElementById("value1").value);
    let b=(document.getElementById("value2").value);
    let c=a*b;
    document.getElementById("answer3").innerHTML="Multiplaction is"+c;

}
function div(){
    let a=(document.getElementById("value1").value);
    let b=(document.getElementById("value2").value);
    let c=a/b;
    document.getElementById("answer4").innerHTML="Division is"+c;

}
function mod(){
    let a=(document.getElementById("value1").value);
    let b=(document.getElementById("value2").value);
    let c=a%b;
    document.getElementById("answer5").innerHTML="Modulu is"+c;

}