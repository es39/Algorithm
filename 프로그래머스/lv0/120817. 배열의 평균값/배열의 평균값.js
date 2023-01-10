function solution(numbers) {
    var answer = 0;
    let result = 0;
    answer = numbers.reduce((a, b) => a+b, 0) / numbers.length
    return answer;
}