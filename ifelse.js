// Условные операторы
//1. Если а – четное посчитать а*б, иначе а+б
function evenplusdoublemult(a, b){

    if ((!a && a!==0) || (!b && b!==0 )) {
        console.log("Error, one or more arguments not enetered");
    }
    if (typeof a!=="number" || typeof b!=="number") {
        return console.log ("Error, function params must be number type");
    }
    if (a%2===0) {
      c=a*b;
    }else{
        c=a+b;
    }
return c;
}
console.log("evenplusdoublemult", evenplusdoublemult (0,2))



// 2. Определить какой четверти принадлежит точка с координатами (х,у)
function whichquarter(x, y) {
    if ( (!x && x !== 0 ) || (!y && y !==0 ) ){
        console.log("Error, one or more arguments not enetered");
    }
    if (typeof x!=="number" || typeof y!=="number") {
        return console.log ("Error, function params must be number type");
    }
    let replie = "quarter";

    if (x>0 && y>0){
        replie="first quarter";
    }
    else if(x>0 && y<0) {
        replie="fourth quarter";
    }
    else if(x<0 && y<0){
        replie="third quarter";
    }
    else if (x===0 || y===0){
        replie="coordinate axes";
    } else{replie="second quarter"; }

    return replie;
}
console.log("whichquarter", whichquarter(5,6))

//3.Найти суммы только положительных из трех чисел
function sumonlypositive(first, second, third){

    if ((!first && first !==0) || (!second && second !== 0) || (!third && third !==0 )) {
    console.log("Error, one or more arguments not enetered");
    }
    if (typeof first !== "number" || typeof second !== "number" || typeof third !== "number") {
    return console.log ("Error, function params must be number type");
    }
    let sum=0;
    if (first >= 0) {
        sum=sum+first;
    } else {
        console.log("first number is not positive");
    }
    if (second >= 0) {
        sum=sum+second;
    } else{console.log("second number is not positive");}
    if (third >= 0) {
        sum=sum+third;
    } else{console.log("third number is not positive");}
    return sum;

}

console.log('sumonlypositive', sumonlypositive(1,2,3));


// 4. Посчитать выражение макс(а*б*с, а+б+с)+3
function maxfromsumormult ( num1 , num2 , num3 ) {

    if (!num1 || !num2 || !num3) {
        console.log("Error, one or more arguments not enetered");
        }

        if ((typeof num1 !== "number" && num1 !==0 ) || (typeof num2 !== "number" && num2 !==0 )
           || (typeof num3 !== "number" && num3!==0 )) {
        return console.log ("Error, function params must be number type");
        }
        let multi= num1*num2*num3;
        let plus= num1+num2+num3;
        let equal="results are equal"

            if ( multi>plus ) {
                return multi+3;
            }
            else if (multi<plus) {
                return plus+3;
            } else {return equal;}
}
console.log("maxfromsumormult", maxfromsumormult(1,2,3));

//5.Написать программу определения оценки студента по его рейтингу, 
//на основе следующих правил
// 0-19	F 20-39	E 40-59	D 60-74	C 75-89	B 90-100 A
function studentrate(point) {

    if ( !point && point!==0 ) {
        console.log("Error, one or more arguments not enetered");
    }
    let rate="F";

    if ( typeof point !== "number") {
        return console.log ("Error, function params must be number type");
    }  
        
    if (point>=0 && point<=19){
        let rate="F";
    }
    else if (point>=20 && point<=39){
        rate="E";
    }
    else if (point>=40 && point<=59){
        rate="D";
    }
    else if (point>=60 && point<=74){
        rate="C";
    }
    else if (point>=75 && point<=89){
        rate="B";
    }
    else if (point>=90 && point<=100){
        rate="A";
    }else{
        rate="point out of range";
    }
    return rate;

}
console.log("studentrate", studentrate(71) )






