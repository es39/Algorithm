function solution(my_string) {
    let result = [...my_string].map(el => parseInt(el))
    let nums = []
    for(let i=0; i<result.length; i++){
        if(!isNaN(result[i])) nums.push(result[i])
    }
    return nums.sort((a,b) => a-b)
}