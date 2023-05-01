function solution(arr1, arr2) {
    // 1. sub 행렬에 대해 arr1[0 ...] * arr2[0, 1, 2 ... ]
    // 2. 한 순서 끝났으면 배열에 mul 배열 넣기
    // 3. 일치하는 자릿수끼리 곱하고 마지막에 합산 
    let result = []
    for(let i=0; i<arr1.length; i++){
        let sub = []
        for(let j=0; j<arr2[0].length; j++){
            let n = 0
            for(let k=0; k<arr1[0].length; k++){
                n += arr1[i][k] * arr2[k][j]
            }
            sub.push(n)
        }
        result.push(sub)
    }
    return result
}