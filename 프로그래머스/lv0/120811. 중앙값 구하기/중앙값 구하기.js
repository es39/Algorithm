function solution(array) {
    var answer = 0;
    let result = array.sort((a, b) => a - b)
    answer = result[Math.floor(result.length/2)]
    return answer;
}