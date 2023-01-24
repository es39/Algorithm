function solution(numbers) {
    let digit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let sum = 0;
    let nums = numbers.sort((a, b) => a-b)
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<digit.length; j++){
            if(!numbers.includes(digit[j])) sum += digit[j]
        }
        break;
    }
    return sum
}