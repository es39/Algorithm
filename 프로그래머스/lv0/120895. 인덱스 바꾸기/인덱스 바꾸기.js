function solution(my_string, num1, num2) {
    let arr = [...my_string]
    let arr2 = arr.splice(num1, 1, my_string[num2])
    let arr3 = arr.splice(num2, 1, my_string[num1])
    return arr.join('')
}