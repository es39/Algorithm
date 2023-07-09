function solution(my_string) {
    let result = []
    let strArr = my_string.split(' ')
    for(let i=0; i<strArr.length; i++){
        if(strArr[i] === '') continue;
        else result.push(strArr[i])
    }
    return result
}