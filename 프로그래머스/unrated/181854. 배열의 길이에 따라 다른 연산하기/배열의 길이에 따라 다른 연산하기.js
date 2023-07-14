function solution(arr, n) {
    // arr 길이 % 2 !== 0 -> arr의 모든 짝수 인덱스 위치에 n을 더한 배열
    // arr 길이 % 2 === 0 -> arr의 모든 홀수 인덱스 위치에 n을 더한 배열
    let result = []
    if(arr.length % 2 === 0) {
        for(let i=0; i<arr.length; i++){
            if(i % 2 !== 0) result.push(arr[i]+n)
            else result.push(arr[i])
        }
    } else {
            for(let i=0; i<arr.length; i++){
                if(i % 2 === 0) result.push(arr[i]+n)
                else result.push(arr[i])
            }
        }
    return result
}