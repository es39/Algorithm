function solution(numbers) {
    let digit = ['zero', 'one', 'two', 'three', 'four', 
                 'five', 'six', 'seven', 'eight', 'nine']
    for(let i=0; i<digit.length; i++){
        numbers = numbers.split(digit[i]).join(i)
    }
    return Number(numbers)
}