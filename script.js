function compute() {
    //variables created for inputs
    let principal = document.getElementById("principal").value;
    let rate = document.getElementsById("rate").value;
    let years = document.getElementById("years").value;
    
    let interest = principal * years * rate / 100;
    let year = new Date().getFullYear() + parseInt(years);
    


    // conditional statement to validate input box
    function showAlert() {
        if(principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
        }
    }

    // set to show once Compute interest is clicked
    document.getElementById("result").innerHTML= "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\</br>";

}

function updateRate() {
    //reads and displays the value of the range slider
    let rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
        
        

        
        

        
        
