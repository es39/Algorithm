function solution(n) {
    // 1. 반복문 활용하여 n부터 1씩 증가시키기
    // 2. 1의 개수가 같은 숫자에서 break
    let result = 0 // 결과
    
    let two_num = n.toString(2).split('').filter(el => el === '1')
    let pre_count = two_num.length; // 원래 n의 1의 개수
    
    let next_count = 0; // 다음 숫자의 1의 개수 count
    while(n !== 0){
        n++;
        let next_num = n.toString(2).split('').filter(el => el === '1')
        next_count = next_num.length
        if(pre_count === next_count) {
            result = n
            break;
        }
    }
    return result
}