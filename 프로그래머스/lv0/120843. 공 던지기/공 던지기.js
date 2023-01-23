function solution(numbers, k) {
    // 인덱스로 접근하기
    let idx = 0;
    for(let i=0; i<k; i++){
        idx += 2;
        if(idx > numbers.length) idx -= numbers.length;
    }
    return numbers[idx-2]
}