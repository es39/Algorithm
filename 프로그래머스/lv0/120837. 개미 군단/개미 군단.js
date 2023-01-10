function solution(hp) {
    // 5로 먼저 나눈 후 몫 === 장군개미
    // 5로 먼저 나눈 후 나머지를 3으로 나눈 몫 === 병정개미
    // 5로 먼저 나눈 후 나머지를 3으로 나눈 나머지 == 일개미
    let five = Math.floor(hp/5)
    let three = Math.floor((hp%5)/3)
    let one = (hp%5)%3
    let result = five + three + one
    return result
}