function solution(num_list) {
    // num_list[num_list.length-1] > num_list[num_list.length-2]
    // num_list[num_list.length-1] - num_list[num_list.length-2]
    // num_list[num_list.length-1] <= num_list[num_list.length-2]
    // num_list[num_list.length-1] * 2
    let result = [...num_list]
    let length = result.length;
    if(result[length-1] > result[length-2]) result.push(result[length-1] - result[length-2])
    else {
        result.push(result[length-1]*2)
    }
    return result
}