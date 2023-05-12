function solution(num_list) {
    let mul = 1
    if(num_list.length >= 11) {
        return num_list.reduce((acc, cur) => acc+cur)
    } else {
        for(let i=0; i<num_list.length; i++){
            mul *= num_list[i]
        }
        return mul
    }
}