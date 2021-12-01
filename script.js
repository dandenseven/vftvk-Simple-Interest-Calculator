function compute() {
    //variables created for inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementsById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    //set to show once Compute interest  is clicked
    document.getElementById("result").innerHTML = "If you deposit " +principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\</br>"


    // conditional statement to validate input box
    if principal <= 0 => {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }


}

function updateRate() {
    //reads and displays the value of the range slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
    
}
        
