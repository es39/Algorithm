function solution(num, k) {
    let strNum = num.toString().split('')
    let arr = []
    for(let i=0; i<strNum.length; i++){
        arr.push(parseInt(strNum[i]))
    }
    let idx = arr.findIndex(el => k === el)
    return idx >= 0 ? idx+1 : -1
}