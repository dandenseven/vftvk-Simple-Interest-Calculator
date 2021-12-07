function compute() {
    //variables created for inputs
    var principal = document.getElementById("principal").value;

    
    // conditional statement to validate input box
    if(principal  == "" || principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var rate = document.getElementsById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);


    // set to show once Compute interest is clicked
    var resultShow = document.getElementById("result");
    resultShow.innerHTML= "If you deposit " + "<span class='highlight'>" + principal + "</span>," + " <br\> at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%" + "<br\>You will receive an amount of "+ "<span class='highlight'>" + interest + "</span>" + ",<br\> in the year " + "<span class='highlight'> " + year + "</span>";

    
   

}

//reads and displays the value of the range slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
        
    
