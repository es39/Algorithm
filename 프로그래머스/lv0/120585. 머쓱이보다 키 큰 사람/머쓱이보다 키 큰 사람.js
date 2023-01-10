function solution(array, height) {
    // array에서 height 보다 키 큰 사람의 수를 구하는 문제
    let result = array.filter(el => el > height)
    return result.length;
}