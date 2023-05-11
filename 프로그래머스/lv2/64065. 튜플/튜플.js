function solution(s) {
    // 1. 배열
    // 2. 짧은 요소 길이로 정렬
    // 3. 없는 요소 result 배열에 push
    
    let result = []
    let arr = []
    let sliced = s.slice(2, -2).split('},{').forEach(el => {
        arr.push(el.split(',').map(el => Number(el)))
    });
    arr.sort((a, b) => a.length-b.length)
    arr.map(el => {
        for(let i=0; i<el.length; i++){
            if(!result.includes(el[i])){
                result.push(el[i])
            }
        }
    })
    return result
}