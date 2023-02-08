function solution(n) {
    //홀짝 나눠서 구하기
    let result = ''
    if(n%2===0) result += '수박'.repeat(n/2) 
    else result += '수박'.repeat(Math.floor(n/2)) + '수'
    return result
}