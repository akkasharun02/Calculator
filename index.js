let num1=0;
let num2=0;
let operateion = "";
let res = 0;
let tempNum=0;

function numberClicked(x){
    console.log(operateion);
    if( operateion != "" && tempNum ==0){
        document.getElementById('result').value = 0;
            tempNum++;
    }
    if(document.getElementById('result').value == 0){
        document.getElementById('result').value= x;
    }
    else{
        document.getElementById('result').value += x;
    }
    tempNum = parseFloat(document.getElementById('result').value);
    console.log(tempNum);
}

function operationPerform(x){
    num1= parseFloat(document.getElementById('result').value);
    operateion=x; 
    tempNum =0
   // document.getElementById('result').value = 0;   
}
function result(option){
    
    num2= parseFloat(document.getElementById('result').value);
    console.log(num1,num2);
    if(option =="sqr"){
        res= num2**2;
    }
    switch (operateion){              
        case 'perc':
            res= (num1 / num2)*100;
            break;
        case '+':
            res= num1 + num2;
            break;
        case '-':
            res= num1 - num2;
            break;
        case '/':
            res= (num1 / num2);
            break;
        case '*':
            res= (num1 * num2);
            break;
        default:
            res=res;
    }
    console.log(res);
    document.getElementById('result').value= res;
     operateion="done";
    tempNum =0;
}

function clearval(){
    num1=0;
    num2=0;
    operateion = "";
    res = 0;
    document.getElementById('result').value= 0;
}