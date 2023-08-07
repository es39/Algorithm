function solution(strArr) {
    const result = []
    for(let i=0; i<strArr.length; i++){
        if(strArr[i].includes('ad')) continue;
        else result.push(strArr[i])
    }
    return result
}