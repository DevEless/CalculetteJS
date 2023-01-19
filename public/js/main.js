//EXO 1
function calculateSum() {
    let input1 = document.getElementsByTagName('input')[0];
    let input2 = document.getElementsByTagName('input')[1];
    let sum = Number(input1.value) + Number(input2.value);
    document.getElementById('response1').innerHTML = sum;
}


const btn = document.getElementsByClassName('btn')[0]
btn.addEventListener("click", calculateSum)



function calculate2() {
    let input1 = document.getElementsByTagName('input')[2];
    let input2 = document.getElementsByTagName('input')[3];
    let operator = document.querySelector('select[name=operator]').value;
    let result;
    switch(operator){
        case "+":
            result = Number(input1.value) + Number(input2.value);
            break;
        case "-":
            result = Number(input1.value) - Number(input2.value);
            break;
        case "*":
            result = Number(input1.value) * Number(input2.value);
            break;
        case "/":
            result = Number(input1.value) / Number(input2.value);
            break;
    }
    document.getElementById('response2').innerHTML = result;
}
const btn2 = document.getElementsByClassName('btn')[2]
btn2.addEventListener("click", calculate2)


function calculate3() {
    let input1 = document.querySelector('#operatorsExo3 input[type=text]').value;
    let input1Value = Number(input1);
    if(isNaN(input1Value)){
        console.log("input1 is not a valid number");
        return;
    }
    let input2 = document.querySelectorAll('#operatorsExo3 input[type=text]')[1].value;
    let input2Value = Number(input2);
    if(isNaN(input2Value)){
        console.log("input2 is not a valid number");
        return;
        
        
    }
    
    let operatorSpan = document.querySelector('#operatorsExo3 span i');
    let operator = operatorSpan;
    console.log(operator)
    let result;
    switch(operator.className){
        case "fas fa-plus":
            result = Number(input1Value) + Number(input2Value);
            break;
            case "fas fa-minus":
                result = Number(input1Value) - Number(input2Value);
                break;
                case "fas fa-times":
            result = Number(input1Value) * Number(input2Value);
            break;
            case "fas fa-divide":
            result = Number(input1Value) / Number(input2Value);
            break;
    }
    console.log(result);
    console.log(typeof(input1Value));
    console.log(input1Value + input2Value);
    document.getElementById('response3').innerText = result;
    
}

function setActiveOperator(e) {
    document.querySelectorAll('.btn').forEach(function(btn){
        btn.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
    let operatorSpan = document.querySelector('#operatorsExo3 input[type=text] + span');
    operatorSpan.innerHTML = e.currentTarget.innerHTML;
}

let operatorButtons = document.querySelectorAll('#operatorsExo3 .btn');
operatorButtons.forEach(function(btn) {
    btn.addEventListener('click', setActiveOperator);
});


    document.getElementById("equalButton").addEventListener("click", calculate3);

    //exo4
    let input1 = document.querySelectorAll('input')[6]
    let input2 = document.querySelectorAll('input')[7]
    let divB = document.getElementById('numbersExo4')
    let divOp = document.getElementById('operatorsExo4')

    let operator = false
    divB.addEventListener("click", (e)=>{
        if(operator == false){
input1.value += e.target.textContent.trim()
        }
        else{
            input2.value += e.target.textContent.trim()
        }

    })

    divOp.addEventListener("click", (e) =>{
        
        switch (e.target.children[0].className) {
            case "fas fa-plus":
                document.querySelector('#exo-4 span i').setAttribute('class', 'fas fa-plus')
                operator = true 
                break;
                case "fas fa-minus":
                    document.querySelector('#exo-4 span i').setAttribute('class', 'fas fa-minus')
                    operator = true 
                    break;

                    case "fas fa-times":
                        document.querySelector('#exo-4 span i').setAttribute('class', 'fas fa-times')
                        operator = true 
                        break;

                        case "fas fa-divide":
                            document.querySelector('#exo-4 span i').setAttribute('class', 'fas fa-divide')
                            operator = true 
                            break;
            default:
                break;
        }
    })
    let operatorButtons2 = document.querySelector('#exo-4 .btn').addEventListener("click", ()=> {
        let operatorSpan = document.querySelector('#exo-4 .box-body span i');
        let operator = operatorSpan;
        console.log(operator)
        let result;
        switch(operatorSpan.className){
            case "fas fa-plus":
                result = Number(input1.value) + Number(input2.value);
                break;
                case "fas fa-minus":
                    result = Number(input1.value) - Number(input2.value);
                    break;
                    case "fas fa-times":
                result = Number(input1.value) * Number(input2.value);
                break;
                case "fas fa-divide":
                result = Number(input1.value) / Number(input2.value);
                break;
        }
        console.log(result);
        document.getElementById('response4').innerText = result;
    })
        
    
    ;
    