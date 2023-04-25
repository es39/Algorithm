function solution(absolutes, signs) {
    // true === 합, false === 차
    let result = 0;
    for(let i=0; i<absolutes.length; ){
        for(let j=0; j<signs.length; j++){
            if(signs[j] === true) result += absolutes[i]
            else result -= absolutes[i]
            i++;
        }
    }
    return result;
}