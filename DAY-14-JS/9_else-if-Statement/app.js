// else-if-Statement

let marks=85;

if(marks>=80){
    console.log(`Excellent!!, You have scored:${marks} and your grade is A+.`);
}else if(marks>=60)
{
    console.log(`Very Good!!, You have scored:${marks} and your grade is A.`);
}
else if(marks>=33)
{
    console.log(`Good!!, You have scored:${marks} and your grade is B.`);
}
else if(marks<33){
    console.log(`Fail!!, You have scored:${marks} and your grade is F.`);

}


//season

let month="january";

if(month==="january")
{
    console.log("Winter is here!!.");
}else if(month==="april"){
    console.log("Summer is here!!.");
}