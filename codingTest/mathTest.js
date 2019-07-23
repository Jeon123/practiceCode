const multiples = (num1, num2) => {
    let numList1 = [], numList2 = [];
    
    let sum = 0;
    
    for(let i = 0; i < 1000; i++) {
        if (i % num1 === 0) {
            sum = sum + i;
            numList1.push(i);
        } else if(i % num2 === 0) {
            sum = sum + i;
            numList2.push(i);
        }
    }

    console.log(`3의 배수 : ${numList1}`);
    console.log(`5의 배수 : ${numList2}`);
    console.log(`합계1 : ${sum}`);
}

const evenValued = (firstNum, secondNum) => {
    let fibonacciList = [firstNum, secondNum];
    let i = 0;;
 
    while(true) {
        fibonacciList.push(fibonacciList[i]+fibonacciList[(i+1)]);
        i++;
        if(fibonacciList[fibonacciList.length-1] >= 4000000) {
            break;
        }
        console.log(`다음 숫자 : ${fibonacciList[i]+fibonacciList[(i+1)]}`);
    }

    let evenSum = fibonacciList.filter(val => { return val % 2 === 0}).reduce((val1, val2) => {return val1 + val2}); 
    console.log(`합계2 : ${evenSum}`);
}

const generator = (minNum, maxNum) => {
    let resultList = Array.from(Array(maxNum), (_, x) => (x + 1));

    let generatorList = resultList.filter((val) => {
        return resultList.every((val2) => {
            return ((val === d(val2)) ? false : true);
        }); 
    });
    let sum = generatorList.reduce((val1, val2) => {
        return val1 + val2;
    });

    console.log(`self-number : ${generatorList}`);
    console.log(`합계3 : ${sum}`);
}

function d(n) {
    let sum = 0;
    let dummy = n;

    while(dummy > 0) {
        sum += dummy%10;
        dummy -= dummy%10;
        dummy /= 10;
    }

    return sum + n;
}

// 1000 미만의 3 혹은 5의 배수들의 합을 구하시오.
multiples(3, 5);

// 피보나치 수열(앞의 두 수의 합이 다음 수가 되는 수열)
// 4백만을 초과하지 않는 피보나치 수열에서 짝수의 합을 구하시오.
evenValued(1, 2);

// 1 이상이고 5000 보다 작은 모든 셀프 넘버들의 합을 구하라.
generator(1, 5000);