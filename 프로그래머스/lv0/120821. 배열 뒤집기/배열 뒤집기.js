function solution(num_list) {
    const result = []
    for(let i=0; i<num_list.length; i++){
        result.unshift(num_list[i])
    }
    return result
}

