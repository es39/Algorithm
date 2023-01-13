function solution(order) {
    let strArr = order.toString().split('')
    return strArr.filter(el => el === '3' || el === '6' || el === '9').length;
}