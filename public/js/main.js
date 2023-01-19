
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









//       </div>
//       <!-- /.box-body -->
//     </div>
//     <div id="exo-3" class="box box-info">
//       <div class="box-header with-border">
//         <h3 class="box-title">3. Même chose qu'au dessus mais on change les opérateurs en clickant sur les boutons.</h3>
//       </div>
//       <!-- /.box-header -->
//       <div id="operatorsExo3" class="box-body">
//         <input type="text" class="form-control">
//         <span>
//           <i class="fas fa-plus"></i>
//         </span>
//         <input type="text" class="form-control">
//         <button class="btn">
//           <i class="fas fa-equals"></i>
//         </button>
//         <span id="response3" class="ml-2">?</span>
//         <br>
//         <button class="m-1 btn">
//           <i class="fas fa-plus"></i>
//         </button>
//         <button class="m-1 btn">
//           <i class="fas fa-minus"></i>
//         </button>
//         <br>
//         <button class="m-1 btn">
//           <i class="fas fa-times"></i>
//         </button>
//         <button class="m-1 btn">
//           <i class="fas fa-divide"></i>
//         </button>
//       </div>
//       <!-- /.box-body -->
//     </div>
//     <div id="exo-4" class="box box-info">
//       <div class="box-header with-border">
//         <h3 class="box-title">4. Faire une calculatrice complète (boutons pour les nombres et pour les opérateurs) En gardant le principe de 2
//           inputs et de 1 opérateur.</h3>
//       </div>
//       <!-- /.box-header -->
//       <!-- box-body -->
//       <div class="box-body">
//         <input type="text" class="form-control">
//         <span>
//           <i class="fas fa-plus"></i>
//         </span>
//         <input type="text" class="form-control">
//         <button class="btn">
//           <i class="fas fa-equals"></i>
//         </button>
//         <span id="response4" class="ml-2">?</span>

//         <div id="numbersExo4">
//           <button class="m-1 btn">
//             1
//           </button>
//           <button class="m-1 btn">
//             2
//           </button>
//           <button class="m-1 btn">
//             3
//           </button>
//           <br>
//           <button class="m-1 btn">
//             4
//           </button>
//           <button class="m-1 btn">
//             5
//           </button>
//           <button class="m-1 btn">
//             6
//           </button>
//           <br>
//           <button class="m-1 btn">
//             7
//           </button>
//           <button class="m-1 btn">
//             8
//           </button>
//           <button class="m-1 btn">
//             9
//           </button>
//           <button class="m-1 btn">
//             0
//           </button>
//         </div>

//         <div id="operatorsExo4">
//           <button class="m-1 btn">
//             <i class="fas fa-plus"></i>
//           </button>
//           <button class="m-1 btn">
//             <i class="fas fa-minus"></i>
//           </button>
//           <button class="m-1 btn">
//             <i class="fas fa-times"></i>
//           </button>
//           <button class="m-1 btn">
//             <i class="fas fa-divide"></i>
//           </button>
//         </div>

//       </div>
//       <!-- /.box-body -->
//     </div>
//   </div>

//   <script src="public/js/main.js" type="module"></script>
// </body>

// </html>