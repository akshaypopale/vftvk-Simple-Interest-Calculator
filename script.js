function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal*rate*years/10;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal==""||principal<=0){
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
        document.getElementById("principal").value="";
        return false;
    }
    document.getElementById("result").innerHTML="<br><br>If you deposit "+principal+",<br>At an interest rate of "+rate+"%"+",<br>you will receive an amount of "+interest+",<br>in the year "+year+".";
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+" %";
}
