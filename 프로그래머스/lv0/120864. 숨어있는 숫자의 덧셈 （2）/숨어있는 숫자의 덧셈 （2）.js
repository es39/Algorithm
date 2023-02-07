function solution(my_string) {
    // 1. 문자로 하나씩 나누기
    // 2. 문자를 순회하여 Number 타입으로 변환
    // 3. isNaN()과 Number을 사용하여 문자인지 숫자인지 구분
    // 4. 숫자라면 각 요소는 string 타입이니 +로 붙여줌
    // 5. 각각 숫자로 다시 변환하여 계산
    /* 정규식을 활용해보자 */
    let nums = my_string.match(/[0-9]+/g)
    if(nums === null) return 0
    return nums.reduce((acc, cur) => Number(acc)+ Number(cur), 0)
}