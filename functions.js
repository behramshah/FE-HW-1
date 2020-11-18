//1. Получить строковое название дня недели по номеру дня. 
let weekday=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let a=6;
if (!a && a!==0){
    console.log("Error, one or more arguments not enetered");
 }
 if (typeof a!=="number"){
    return console.log ("Error, function params must be number type");
  }
function whichday(a){

    if ( a>0 && a<=7 ){
        
        return weekday[a-1];
    
    } else { return "only 1, 2, 3, 4, 5, 6, 7 must used"

     }
}
console.log("whichday", whichday(a));

//2.Вводим число (0-999), получаем строку с прописью числа.

let firstTen =[" ","bir","iki","üç","dörd","beş","altı","yeddi","səkkiz","doqquz"]
let tillHundred=[" ","on","iyirmi","otuz","qırx","əlli","altmış","yetmiş","səksən","doxsan"," yüz ",]
let hundreds =[" ","yüz","iki","üç","dörd","beş","altı","yeddi","səkkiz","doqquz"]

let usernum=420;
let textnum;

    if ( !usernum && usernum!==0 ){

    console.log("Error, one or more arguments not enetered");
    }

    if ( typeof usernum!=="number" ){

        return console.log ("Error, function params must be number type");
    }
function tillcent(a){
    dec=(a/10)>>0;
    single=a%10;
    answer=tillHundred[dec]+" "+firstTen[single]
    return answer;
}

function tillkilo(b){
    cento=(b/100)>>0;
    dec=(b/10)>>0;
    dec2=dec%10;
    single=b%10;
    answer=firstTen[cento]+" "+tillHundred[10]+" "+ tillHundred[dec2]+" "+firstTen[single];
    return answer;
}

function saynumber(usernum){

    if ( usernum<10 && usernum>0 ){

        textnum=firstTen[usernum];
    }
    else if ( usernum >= 10 && usernum <= 100 ){

        textnum=tillcent(usernum);
    }
    else if ( usernum >100 && usernum < 1000  ){
        textnum=tillkilo(usernum);
    }
    else if (usernum===0){
        textnum="Sıfır";
    }
    else{
        console.log("Out of range 0-999")
    }
    return textnum;
}
console.log("saynumber",saynumber(usernum))

//3.Вводим строку, которая содержит число,
//написанное прописью (0-999). Получить само число

let usertext;
let centos=0;
let decs=0;
let singles=0;
function texttonum (usertext){

    while(usertext!==null){

    let spaceind=usertext.Indexof(" ");

    let step=usertext.substring(0, spaceind);

        for(i=0; i<12; i++){
            
            if(firstTen[i]===step){
                centos=i;
            }
            else if (tillHundred[i]===step){
                centos=i;
            }
        }
    usertext=usertext.substring(spaceind+1);
    }
}