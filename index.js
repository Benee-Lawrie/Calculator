window.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById("user-input");
    
    document.querySelectorAll(".button").forEach(function (item) {
        item.addEventListener("click", function (e) {
            const buttonValue = e.target.innerHTML.trim();
            if (input.innerText === "NaN") {
                input.innerText = "";
            }
            if (input.innerText === "0") {
                input.innerText = "";
            }
           
            input.innerText += buttonValue;
        });
    });


    let operator = document.querySelectorAll(".operator")
    operator.forEach(function(item){
        item.addEventListener("click", (e)=>{
            if (e.target.innerHTML === "AC") {
                input.innerText = 0;
            } else if (e.target.innerHTML === "DEL") {
                input.innerText = input.innerText.slice(0, -1);
                if (input.innerText.length === 0) {
                    input.innerText = 0;
                }
            }else if(e.target.innerHTML === "="){
                input.innerText = eval(input.innerText);
            }
        })
    })


});