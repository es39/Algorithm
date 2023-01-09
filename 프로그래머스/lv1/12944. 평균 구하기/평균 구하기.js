function solution(arr) {
    let sum = 0
    for(el of arr){
        sum += el
    }
    return sum/arr.length
}