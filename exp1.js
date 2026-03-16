function calculateResult(){
    let n=document.getElementById("subject").value;
    let total=0;
    let marks;
    for(let i=1; i<=n; i++){
      marks=parseFloat(prompt("Enter marks for Subject" +i));
     total=total+marks;
}
let average=total/n;
let grade;
let result;
if(average>=90){
    grade="A+";
}
else if(average>=75){
    grade="A";

}
else if(average>=60){
    grade="B";
}
else if(average>=50){
    grade="C";
}
else if(average>=40){
    grade="D"
}
document.getElementById("result").innerHTML="Total Marks"+total+"<br>"+"Average"+average;
}
