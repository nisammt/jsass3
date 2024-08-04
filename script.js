

  const checkGrade=()=>{
    
    const mark = parseInt(document.getElementById('marks').value);
    console.log(mark);
    let grade, status;
   
    
    if (mark >= 90 && mark <=100) {
        grade = 'A+';
    } else if (mark >= 80 && mark <= 89) {
        grade = 'A';
    
    } else if (mark >= 70 && mark <= 79) {
        grade = 'B+';
    } else if (mark >= 60 && mark <= 69) {
        grade = 'B';
    } else if (mark >= 50 && mark <= 59) {
        grade = 'C+';

    } else if (mark >= 40 && mark <= 49) {
        grade = 'C';
    } else if (mark >= 30 && mark <= 39) {
        grade = 'D+';
    } else if (mark >= 20 && mark <= 29) {
        grade = 'D';

    } else {
        grade = 'D'
    }
    
    if (mark >= 30) {
        status = 'You Passed your eligible higher studies';
    } else {
        status = ' You Faild Better luck next time';
    }
    document.getElementById('grade').innerHTML="Your Grade is "+grade+ 
         ","+status+""
}
    
    document.getElementById("show-grade").addEventListener("click", checkGrade);
    
 


