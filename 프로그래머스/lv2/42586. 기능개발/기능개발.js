function solution(progresses, speeds) {
    let result = []
    let remain = []
    for(let i=0; i<progresses.length; i++){
        remain.push(Math.ceil((100-progresses[i])/speeds[i]))
    }
    let count = 1
    let first = remain[0]
    for(let i=1; i<remain.length; i++){
        if(first >= remain[i]) {
            count ++;
        } else {
            result.push(count)
            count = 1
            first = remain[i]
        }
    }
    result.push(count)
    return result
}