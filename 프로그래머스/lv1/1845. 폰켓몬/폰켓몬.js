function solution(nums) {
    // 1. N/2 개수만큼 골라야 함
    // 2. 최대한 다양한 종류로 골라야 함 (중복제거)
    let pkm = nums.length/2;
    let result = [...new Set(nums)]
    if(result.length > pkm) {
        return pkm
    } else return result.length
}