function solution(arr) {
    let result = []
    arr.map(el => {
        for(let i=1; i<=el; i++){
            result.push(el)
        }
        return result
    })
    return result
}