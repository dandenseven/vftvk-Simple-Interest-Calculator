function compute() {
    //variables created for inputs
    var principal = document.getElementById("principal").value;
    var rate = document.getElementsById("rate").value;
    var years = document.getElementById("years").value;
    
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    
    document.getElementById("result").innerHTML= "If you deposit "+<mark>principal</mark>+",\<br\>at an interest rate of "+<mark>rate</mark>+"%\<br\>You will receive an amount of "+<mark>interest</mark>+",\<br\>in the year "+<mark>year</mark>+"\</br>";

    // conditional statement to validate input box
    if (principal <= 0) {
        alert (
            <div>
                <p>"Enter a positive number"</p>
        document.getElementById("principal").focus();
        return false;
        </div>
        )
    }
    

    // set to show once Compute interest is clicked

    // document.getElementById("result").innerHTML= "If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\</br>";
    
}

function updateRate() {
    //reads and displays the value of the range slider
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
        
        

        
        

