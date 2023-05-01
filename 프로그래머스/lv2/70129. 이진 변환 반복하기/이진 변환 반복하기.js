function solution(s) {
    // [이진 변환 횟수, 제거된 0의 개수]
    // 1. 0을 모두 제거 
    // 2. 길이에 대한 2진법 표현
    let result = []
    let count = 0;
    let zero_count = 0;
    while(s.length > 1){
        let one = s.split('').filter(el => el === '1').join('')
        count ++;
        zero_count += s.length - one.length
        s = one.length.toString(2)
    }
    result[0] = count;
    result[1] = zero_count;
    return result
}