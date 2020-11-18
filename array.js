//1.Найти минимальный элемент массива 
//2.Найти максимальный элемент массива
//3.Найти индекс минимального элемента массива
//4.Найти индекс максимального элемента массива

let array=[9, 7, 3, -2, 0, 12, 33, -5];
function findmaxmin (array){
    let maxarray=array[0]; 
    let indexmax=0;
        for (i = 0; i < array.length; i++){
    
            if (array[i] > maxarray) {
            maxarray = array[i];
            indexmax=i;
            }
        }
        

    let indexmin=array.length-1;
    let minarray=array[indexmin];
    for (j=0;j<array.length;j++){

        if (array[j]<minarray){
            minarray=array[j];
            indexmin=j;
        }
    }
        let result={minimal: minarray, maximal:maxarray, indexofmin:indexmin, indexofmax:indexmax}
        return result;
    
}
    console.log("findmaxmin",findmaxmin(array))

    //5.Посчитать сумму элементов массива с нечетными индексами
    
    let arrayodd=[9, 7, 3, -2, 0, 12, 33, -5, 18 , 23, -32 , -15];

    function countoddelements(arrayodd) {
        let sumodd=arrayodd[1];

        for (i=3;i<arrayodd.length; i++){
            if(i%2===1){
                sumodd=sumodd+arrayodd[i]
            }
        }         
        
        return sumodd;
    }
    console.log("countoddelements", countoddelements(arrayodd));

    //6.Сделать реверс массива (массив в обратном направлении)

    let arrayrev=[1, 2, 3, 4, 5, 6, 7];
    let revers=[];
    
    function reverse(arrayrev){
        for( i=0; i<arrayrev.length; i++ ){
            revers[arrayrev.length-i-1]=arrayrev[i];
        }
        
        return revers;
    }
    console.log("reverse", reverse(arrayrev))


    //7.Посчитать количество нечетных элементов массива

let arrayq=[9, 7, 3, -2, 0, 12, 33, -5, 18 , 23, -32 , -15];

function countodd(arrayq){
    let quant=0

    for( i=0; i<arrayq.length; i++ ) {
        if (arrayq[i]%2===1||arrayq[i]%2===-1){
                quant++
        }
    }

    return quant;
}
console.log("countodd",countodd(arrayq));

//8.Поменять местами первую и вторую половину массива,
//например, для массива 1 2 3 4, результат 3 4 1 2

let arrayupsdwn=[1, 2, 3, 4, 5, 6, 7, 8, 11];
let halflength=(arrayupsdwn.length/2)>>0;


function upside(arrayupsdwn){

    for ( i=0; i<halflength; i++ ){

       temp=arrayupsdwn[halflength]
       arrayupsdwn[halflength]=arrayupsdwn[i]
       arrayupsdwn[i]=temp
    }
    return arrayupsdwn;
}
console.log("upside ", upside(arrayupsdwn));
