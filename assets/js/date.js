// Sets up date in welcome header

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

// If statements 
if(dd < 10){
    dd = '0' + dd;
}
if(mm < 10){
    mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date-header').innerHTML = today;