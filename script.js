
function saveAnswer(k,v,n){localStorage.setItem(k,v);location=n;}
function loadAnswers(){['q1','q2','q3','q4'].forEach(x=>document.getElementById(x).value=localStorage.getItem(x)||'');}
function setFinal(v){document.getElementById('q5').value=v;}
