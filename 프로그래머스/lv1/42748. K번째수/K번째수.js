function solution(array, commands) {
    // 1. commands[i][0] ~ commands[i][1] 만큼 자름
    // 2. commands[i][2] 에 해당하는 숫자 -1 하고 해당하는 index 에 있는 숫자 배열로 넣기
    let result = []
    return commands.map(el => {
        let sliced_sorted = array.slice(el[0]-1, el[1]).sort((a, b) => a-b)
        console.log(sliced_sorted)
        return sliced_sorted[el[2]-1]
    })
}