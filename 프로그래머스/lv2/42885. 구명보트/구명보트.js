function solution(people, limit) {
    // 1. 정렬
    // 2. 앞, 뒤 합과 limit 비교
    // 3. 인덱스 옮기며 result 증가
    let result = 0 // 보트 수
    people.sort((a, b) => a-b)
    let left = 0;
    let right = people.length-1
    while(left < right) {
        if(people[left] + people[right] > limit) {
            right --
        } else {
            left ++
            right --
        }
        result ++;
    }
    // 마지막에 1개 남았을 때
    if(left === right) result ++
    return result
}