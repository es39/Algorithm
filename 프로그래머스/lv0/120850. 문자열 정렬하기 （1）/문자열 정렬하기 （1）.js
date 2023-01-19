function solution(my_string) {
return [...my_string].map(el => parseInt(el)).filter(el => !isNaN(el)).sort((a, b) => a-b)
    // for(let i=0; i<result.length; i++){
    //     if(!isNaN(result[i])) nums.push(result[i])
    // }
    // return nums.sort((a,b) => a-b)
}