function solution(s) {
    // 공백기준으로 문자열 나눠줌
    let str = s.split(' ')
    // 반복문을 통해 Z 포함여부 확인
    while(str.includes('Z')){
        // 포함이 되어 있다면 이전 요소의 인덱스부터 2개 자르기
        str.splice(str.indexOf('Z')-1, 2)
    }
    // 합
    return str.reduce((acc, cur) => Number(acc)+Number(cur), 0)
}