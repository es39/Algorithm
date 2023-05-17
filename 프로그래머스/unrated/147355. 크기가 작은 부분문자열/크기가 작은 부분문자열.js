function solution(t, p) {
    // 1. 문자열 잘라서 숫자로 변환 후 배열에 넣기
    // 2. p를 숫자로 변환 후 p의 개수만큼 숫자 붙여서 다른 배열에 넣기
    // 3. 결과 출력
    let t_nums = t.split('').map(el => Number(el))
    let nums = []
    let result = 0
    for(let i=0; i<t_nums.length; i++){
        if(t.slice(i, i+p.length).length === p.length) {
            nums.push(t.slice(i, i+p.length))
        }
    }
    for(let i=0; i<nums.length; i++){
        if(Number(nums[i]) <= p) result ++
    }
    return result
}