function compute() {
    //variables created for inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementsById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    

    // conditional statement to validate input box
    if(principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    // set to show once Compute interest is clicked
    var name = "If you deposit "+<mark>principal</mark>+",<br\>at an interest rate of "+<mark>rate</mark>+"%<br\>You will receive an amount of "+<mark>interest</mark>+",\<br\>in the year "+<mark>year</mark>+"\<br\>"
    // var name= `If you deposit <mark>${principal}</mark>,<br\>at an interest rate of <mark>${rate}%</mark><br\>You will receive an amount of <mark>${interest}</mark>,\<br\>in the year <mark>${year}</mark></br>`;
    document.getElementById("result").innerHTML= name;
   
    "If you deposit "+<mark>principal</mark>+",<br\>at an interest rate of "+<mark>rate</mark>+"%<br\>You will receive an amount of "+<mark>interest</mark>+",\<br\>in the year "+<mark>year</mark>+"\<br\>"
}

//reads and displays the value of the range slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
        
 
