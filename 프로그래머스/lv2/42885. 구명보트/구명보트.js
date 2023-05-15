function solution(people, limit) {
    let result = 0 // 보트 수
    let sorted = people.sort((a, b) => a-b)
    let left = 0
    let right = people.length-1
    while(left<right) {
        if(people[left] + people[right] > limit) {
            right --
        } else{
            left ++
            right --;
        }
        result ++;
    }
    if(left === right) result ++;
    return result
}