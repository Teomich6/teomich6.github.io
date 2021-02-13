let currentlput='';
let currentlAction='';
let currentlValue='0';
function numberln(num){
 if (currentlput.length >=10) return;
 currentlput = currentlput + num;
 showcurrentlput(currentlput);
}
/* отображение текущего значения */
function showcurrentlput(value){
    document.querySelector('.input-field').innerHTML= value;
}

function clearln(){
    currentlput='';
    currentlAction='';
    currentlValue= 0;
    showcurrentlput('0');
}

/* Метод вызовадействия */
function doAction(action){
    //calculate();
    currentlAction = action;
    currentlValue = +currentlput;
    currentlput='';
}

/* Метод подсчета */
function calculate(){
    const secondValue = +currentlput;
    if (currentlAction =='-'){
       // Вычитание
       const result =currentlValue - secondValue;
       showcurrentlput(result);
    }
    if (currentlAction =='+'){
       // Сложение
       const result =currentlValue + secondValue;
       showcurrentlput(result);
    }
    if (currentlAction =='/'){
       // Деление
       const result =currentlValue / secondValue;
       result = Math.floor(result * 100000000000) / 100000000000;
       showcurrentlput(result);
    }
    if (currentlAction =='*'){
       // Умножение
       const result =currentlValue * secondValue;
       showcurrentlput(result);
    }
}