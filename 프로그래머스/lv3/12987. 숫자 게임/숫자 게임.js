function solution(A, B) {
    let sort_a = A.sort((a, b) => b-a)
    let sort_b = B.sort((a, b) => b-a)
    let result = 0;
    let k = 0;
    for(let i=0; i<sort_a.length; i++){
        if(sort_a[i] < sort_b[k]) {
            result ++
            k += 1
        }
    }
    return result
}