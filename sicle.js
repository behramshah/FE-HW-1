//1. Найти сумму четных чисел и их количество в диапазоне от 1 до 99
function findeven(){
    let counteven=0;
    let sumeven=0;
    for(i=1;i<99;i++){

        if (i%2===0){
            sumeven=sumeven+i;
            counteven=counteven+1;
        }
    }
    let result={sum:sumeven, count:counteven};
    return result;
}
console.log("findeven", findeven())

//2.Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)
function isprimenumber(testnum){
        
    if (!testnum && testnum!==0){
        console.log("Error, one or more arguments not enetered");
    }
    if (typeof testnum!=="number"){
        return console.log ("Error, function params must be number type");
    }    
        let i=testnum;
        let counter=0;
        for (i=testnum; i>0; i--){

           if (testnum%i===0){
            counter++;
            }
        }

        if(counter>2){
            return false;
        } else {return true;
        }
}
console.log("isprimenumber",isprimenumber(100));

//3.Найти корень натурального числа с точностью до целого 
//(рассмотреть вариант последовательного подбора и метод бинарного поиска)
function sqroot(targetnum){
    
    if (!targetnum && targetnum!==0){
        console.log("Error, one or more arguments not enetered");
    }
    if (typeof targetnum!=="number"){
        return console.log ("Error, function params must be number type");
    }
    if(targetnum<0){
        return console.log("Complex number");
    }
    let linear=0;
    let lineresult=0;
    do (linear++)
    while(linear*linear<=targetnum) 
    let distanceto=targetnum-(linear-1)*(linear-1);
    let distancefr=(linear+1)*(linear+1) - targetnum;
    let matchdistance=targetnum-(linear*linear)

    if(matchdistance===0){
        lineresult=linear;
    }
    else if(distancefr>distanceto){
        lineresult=linear-1;
    }
    else if(distancefr<distanceto){
        lineresult=linear+1;
    }else{lineresult=linear;}

    let lbinary=targetnum/2;

    do {
        lbinary=lbinary/2;
    }
    while(lbinary*lbinary>=targetnum)
    targetnext=targetnum-lbinary;
    let hbinary=targetnext/2;
    while(hbinary*hbinary>=targetnum){
        hbinary=hbinary/2;
    }
    let mbinary=(targetnum-hbinary)/2;

    let answers={line:lineresult, binary:mbinary};
    return answers;
}
console.log("sqroot", sqroot(82))


//4. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!
function factorial(usernum){
   
    if (!usernum && usernum!==0){
        console.log("Error, one or more arguments not enetered");
    }
    if (typeof usernum!=="number"){
        return console.log ("Error, function params must be number type");
    }
    let factor=1;
    let step=1;
    do {
        factor=factor*step;step++;
    }
    while (step<=usernum)
    return factor;
}
console.log("factorial", factorial(10))
 
   //5.	Посчитать сумму цифр заданного числа
   function calculate(random){

     if (!random && random!==0){
        console.log("Error, one or more arguments not enetered");
     }
     if (typeof random!=="number"){
        return console.log ("Error, function params must be number type");
      }
      if(random<0){
        random=random*-1
      }
     let sum=0;
     while( random % 1 !==0 ){
         random=random*10
     }
     while( random>0 ){
        sum=sum+random%10;
        random=(random-random%10)/10;
     }
     return sum;
   }
   console.log("calculate", calculate(-327.789));

   //6.	Вывести число, которое является зеркальным отображением 
   // последовательности цифр заданного числа, например,
   //задано число 123, вывести 321.
   function mirrornum(reflectit){

    if (!reflectit && reflectit!==0){
        console.log("Error, one or more arguments not enetered");
    }
    if (typeof reflectit!=="number"){
        return console.log ("Error, function params must be number type");
    }
    let newnum=0;
    let counter=1;
    do {
        newnum=newnum*10+reflectit%10;
        reflectit=(reflectit-reflectit%10)/10;
    }
    while(reflectit!==0)
    return newnum;
}

console.log("mirrornum", mirrornum(2578))