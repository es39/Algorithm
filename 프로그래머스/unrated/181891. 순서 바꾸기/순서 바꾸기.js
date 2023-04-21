function solution(num_list, n) {
    //1. 새 배열 생성
    //2. n번째 이후 요소 새 배열에 넣기
    //3. n번째 이전 요소 차례대로 새 배열에 추가하기
    let result = []
    for(let i=n; i<num_list.length; i++){
        result.push(num_list[i])
    }
    for(let i=0; i<n; i++){
        result.push(num_list[i])
    }
    return result
}