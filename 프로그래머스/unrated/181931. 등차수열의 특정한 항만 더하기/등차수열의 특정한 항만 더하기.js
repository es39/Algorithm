function solution(a, d, included) {
    // 1. included 길이만큼 등차수열 만들기
    // 2. 그 등차수열에서 included[i] === true 인 숫자만 넣기
    // 3. 합 구하기
    const arr = []
    const result = []
    let count = 0
    for(let i=a; ; i+=d){
        count ++;
        if(count <= included.length) arr.push(i)
        else break;
    }
    for(let i=0; i<arr.length; i++){
        if(included[i] === true) result.push(arr[i])
    }
    return result.reduce((acc, cur) => acc+cur)
}