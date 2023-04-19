function solution(a, b) {
    // a[i] * b[i] 의 값을 배열에 넣고 reduce 로 합산 구하기
    let result = [];
    for(let i=0; i<a.length; i++){
        for(let j=0; j<b.length; j++){
            if(i === j) result.push(a[i]*b[j])
        }
    }
    return result.reduce((acc, cur) => acc+cur)
}